const Company = require("../../modles/companyModle");

const postCompanyData = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(200).json(company);
    console.log("data added successfully", company);
  } catch (error) {
    console.log(error);
  }
};

module.exports = postCompanyData;
