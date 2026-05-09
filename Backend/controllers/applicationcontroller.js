const Application = require("../models/application");

const createApplication = async (req, res) => {
  try {
    const {
      ownerName,
      pan,
      businessType,
      monthlyRevenue,
      loanAmount,
      tenureMonths,
      purpose,
    } = req.body;

    let creditScore = 100;

    let reasons = [];

    const emi = loanAmount / tenureMonths;

    if (loanAmount > monthlyRevenue * 12) {
      creditScore -= 40;
      reasons.push("HIGH_LOAN_RATIO");
    }

    if (emi > monthlyRevenue * 0.4) {
      creditScore -= 30;
      reasons.push("LOW_REVENUE");
    }

    if (tenureMonths < 6) {
      creditScore -= 10;
      reasons.push("SHORT_TENURE_RISK");
    }

    let status = creditScore >= 70 ? "APPROVED" : "REJECTED";

    const application = await Application.create({
      ownerName,
      pan,
      businessType,
      monthlyRevenue,
      loanAmount,
      tenureMonths,
      purpose,
      status,
      creditScore,
      reasons,
    });

    res.status(201).json(application);

  } catch (error) {
    res.status(400).json({
  message: error.message,
  errors: error.errors,
});
  }
};

module.exports = {
  createApplication,
};