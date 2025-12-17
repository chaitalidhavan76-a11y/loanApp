import LoanApplication from "../models/Loan.js";
import Lead from "../models/Lead.js";
import Lender from "../models/Lender.js";
import { logger } from "../utils/logger.js";

class LoanService {
  async applyLoan(data) {
    const application = await LoanApplication.create({
      loanType: data.loanType,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      employmentStatus: data.employmentStatus,
      annualIncome: data.annualIncome,
      loanAmount: data.loanAmount,
      loanTenure: data.loanTenure,

      vehicleType: data.vehicleType,
      vehiclePrice: data.vehiclePrice,
      monthlyIncome: data.monthlyIncome,

      reason: data.reason,

      courseName: data.courseName,
      instituteName: data.instituteName,
      parentIncome: data.parentIncome,

      businessName: data.businessName,
      businessType: data.businessType,
      turnover: data.turnover,

      extraDetails: data.extraDetails || {}
    });

    const lenders = await Lender.find({ isActive: true })
      .select("_id name commissionPercent")
      .lean();

    const matchedLenders = lenders.map(l => ({
      lenderId: l._id,
      status: "matched",
      sentAt: null
    }));

    const lead = await Lead.create({
      applicationId: application._id,
      loanType: data.loanType,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      employmentStatus: data.employmentStatus,
      annualIncome: data.annualIncome,
      loanAmount: data.loanAmount,
      loanTenure: data.loanTenure,

      vehicleType: data.vehicleType,
      vehiclePrice: data.vehiclePrice,
      monthlyIncome: data.monthlyIncome,

      reason: data.reason,

      courseName: data.courseName,
      instituteName: data.instituteName,
      parentIncome: data.parentIncome,

      businessName: data.businessName,
      businessType: data.businessType,
      turnover: data.turnover,

      extraDetails: data.extraDetails || {},

      score: 0,
      status: "new",
      matchedLenders
    });

    logger.info("Lead generated", {
      applicationId: application._id,
      leadId: lead._id,
      loanType: data.loanType,
      lendersMatched: matchedLenders.length
    });

    return { application, lead };
  }

  async getLoanById(id) {
    return LoanApplication.findById(id);
  }

  async getLeadById(id) {
    return Lead.findById(id);
  }

  async listLeadsForLender(lenderId, filters = {}) {
    const query = { "matchedLenders.lenderId": lenderId };

    if (filters.status) query.status = filters.status;
    if (filters.q) query.$text = { $search: filters.q };

    return Lead.find(query).sort({ createdAt: -1 });
  }
}

export default new LoanService();
