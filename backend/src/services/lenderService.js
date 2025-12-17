import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Lender from "../models/Lender.js";
import Lead from "../models/Lead.js";

const TOKEN_EXP = "8h";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

class LenderService {
  async register(data) {
    const exists = await Lender.findOne({ email: data.email });
    if (exists) return { error: "Email already registered" };

    const passwordHash = await bcrypt.hash(data.password, 10);

    const lender = await Lender.create({
      name: data.name,
      email: data.email,
      passwordHash,
      loanTypes: data.loanTypes || [],
      commissionPercent: data.commissionPercent || 1,
      apiEndpoint: data.apiEndpoint || null,
      apiKeyHash: data.apiKey ? await bcrypt.hash(data.apiKey, 10) : null
    });

    return { lender };
  }

  async login(email, password) {
    const lender = await Lender.findOne({ email });
    if (!lender) return { error: "Invalid credentials" };

    const match = await bcrypt.compare(password, lender.passwordHash);
    if (!match) return { error: "Invalid credentials" };

    const token = jwt.sign(
      { id: lender._id, role: "lender" },
      JWT_SECRET,
      { expiresIn: TOKEN_EXP }
    );

    return {
      token,
      lender: {
        id: lender._id,
        name: lender.name,
        email: lender.email
      }
    };
  }

  async getLeads(lenderId, filters) {
    const query = { "matchedLenders.lenderId": lenderId };

    if (filters.status) query.status = filters.status;
    if (filters.q) query.$text = { $search: filters.q };

    const page = Number(filters.page) || 1;
    const limit = 20;

    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return { leads };
  }

  async getLead(id, lenderId) {
    const lead = await Lead.findById(id);
    if (!lead) return { error: "Lead not found" };

    const allowed = lead.matchedLenders.some(
      m => String(m.lenderId) === String(lenderId)
    );

    if (!allowed) return { error: "Access denied" };
    return { lead };
  }

  async updateLeadStatus(id, lenderId, body) {
    const lead = await Lead.findById(id);
    if (!lead) return { error: "Lead not found" };

    const allowed = lead.matchedLenders.some(
      m => String(m.lenderId) === String(lenderId)
    );
    if (!allowed) return { error: "Access denied" };

    if (body.status) lead.status = body.status;

    if (body.note) {
      lead.notes = lead.notes || [];
      lead.notes.push({
        text: body.note,
        by: lenderId,
        at: new Date()
      });
    }

    await lead.save();
    return { lead };
  }

  async assignLead(leadId, lenderId) {
    const lead = await Lead.findOneAndUpdate(
      {
        _id: leadId,
        assignedTo: null
      },
      {
        assignedTo: lenderId,
        status: "sold"
      },
      { new: true }
    );

    if (!lead) return { error: "Lead already assigned" };
    return { lead };
  }
}

export default new LenderService();
