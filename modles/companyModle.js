const mongoose = require("mongoose");

const companyModel = mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "please enter a company name"],
  },

  company_state: {
    type: String,
    required: true,
  },
  company_networth: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("Company", companyModel);

module.exports = Company;
