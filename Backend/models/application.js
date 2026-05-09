const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },

   pan: {
  type: String,
  required: true,
  uppercase: true,
  match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"],
  },

    businessType: {
      type: String,
      required: true,
    },

    monthlyRevenue: {
    type: Number,
    required: true,
    min: [0, "Revenue cannot be negative"],
    },

    loanAmount: {
  type: Number,
  required: true,
  min: [1, "Loan amount must be greater than 0"],
  },

   tenureMonths: {
  type: Number,
  required: true,
  min: [1, "Minimum tenure is 1 month"],
  max: [120, "Maximum tenure is 120 months"],
  },

    purpose: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "PENDING",
    },

    creditScore: {
      type: Number,
      default: 0,
    },

    reasons: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);