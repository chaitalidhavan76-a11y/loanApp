import lenderService from "../services/lenderService.js";

class LenderController {
  async register(req, res) {
    const result = await lenderService.register(req.body);
    if (result.error) return res.status(400).json({ error: result.error });
    return res.json({ success: true, lender: result.lender });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const result = await lenderService.login(email, password);
    if (result.error) return res.status(401).json({ error: result.error });
    return res.json({ success: true, token: result.token, lender: result.lender });
  }

  async getLeads(req, res) {
    const result = await lenderService.getLeads(req.user.id, req.query);
    return res.json({ success: true, leads: result.leads });
  }

  async getLeadDetails(req, res) {
    const result = await lenderService.getLead(req.params.id, req.user.id);
    if (result.error) return res.status(403).json({ error: result.error });
    return res.json({ success: true, lead: result.lead });
  }

  async updateLeadStatus(req, res) {
    const result = await lenderService.updateLeadStatus(
      req.params.id,
      req.user.id,
      req.body
    );
    if (result.error) return res.status(400).json({ error: result.error });
    return res.json({ success: true, lead: result.lead });
  }

  async assignLead(req, res) {
    const leadId = req.params.id;
    const lenderId = req.user.id;
    const result = await lenderService.assignLead(leadId, lenderId);
    if (result.error) return res.status(400).json({ error: result.error });
    return res.json({ success: true, lead: result.lead });
  }
}

export default new LenderController();
