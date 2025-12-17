import loanService from "../services/loanService.js";

class LoanController {
  async applyGeneric(req, res) {
    const result = await loanService.applyLoan(req.body);

    res.status(201).json({
      success: true,
      data: {
        applicationId: result.application._id,
        leadId: result.lead._id,
      },
    });
  }
}

export default new LoanController();
