const Company = require("../../modles/companyModle");

const getCompanyData = async (req, res) => {
  try {
    const company = await Company.find({});
    res.status(200).json(company);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCompanyData;
