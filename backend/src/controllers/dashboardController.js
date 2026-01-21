import Loan from "../models/Loan.js";

/**
 * @desc    Get dashboard summary for logged-in user
 * @route   GET /api/dashboard/summary
 * @access  Private
 */
export const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    // ===== MOCK / BASIC DATA (can be replaced with real aggregation later) =====
    // You already have Loan model, so this is future-ready

    const activeLoans = await Loan.countDocuments({
      user: userId,
      status: "approved",
    });

    const loans = await Loan.find({ user: userId }).limit(5);

    const totalLoanAmount = loans.reduce(
      (sum, loan) => sum + (loan.amount || 0),
      0
    );

    const emiThisMonth = loans.reduce(
      (sum, loan) => sum + (loan.emi || 0),
      0
    );

    res.status(200).json({
      success: true,
      data: {
        stats: {
          activeLoans: activeLoans || 0,
          totalLoanAmount: totalLoanAmount || 350000, // fallback
          emiThisMonth: emiThisMonth || 12500,
          creditScore: 742, // static for now
        },
        loans: loans.length
          ? loans.map((loan) => ({
              id: loan._id,
              loanType: loan.loanType || "Personal Loan",
              lender: loan.lenderName || "HDFC Bank",
              status: loan.status || "approved",
              emi: loan.emi || null,
              tenure: loan.tenure || "36 Months",
            }))
          : [
              // fallback UI data
              {
                id: 1,
                loanType: "Personal Loan",
                lender: "HDFC Bank",
                status: "approved",
                emi: 7500,
                tenure: "36 Months",
              },
              {
                id: 2,
                loanType: "Credit Card",
                lender: "ICICI Bank",
                status: "pending",
                emi: null,
                tenure: null,
              },
            ],
      },
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    });
  }
};
