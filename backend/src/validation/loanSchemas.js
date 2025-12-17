import Joi from "joi";

const baseLoan = {
  fullName: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(8).max(20).required(),
  loanAmount: Joi.number().min(1000).required(),
};

export const homeLoanSchema = Joi.object({
  body: Joi.object({
    ...baseLoan,
    address: Joi.string().required(),
    employmentStatus: Joi.string().valid(
      "salaried",
      "self-employed",
      "business",
      "retired"
    ),
    annualIncome: Joi.number().min(0).required(),
    loanTenure: Joi.number().valid(5, 10, 15, 20, 25).required(),
  }),
  params: Joi.object(),
  query: Joi.object(),
});

export const autoLoanSchema = Joi.object({
  body: Joi.object({
    ...baseLoan,
    vehicleType: Joi.string().valid("car", "bike", "scooter").required(),
    vehiclePrice: Joi.number().min(50000).required(),
    employmentStatus: Joi.string().valid(
      "salaried",
      "self-employed",
      "business"
    ),
    monthlyIncome: Joi.number().min(0).required(),
  }),
  params: Joi.object(),
  query: Joi.object(),
});

