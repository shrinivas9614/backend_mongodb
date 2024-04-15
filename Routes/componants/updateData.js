const Company = require("../../modles/companyModle");

const updateCompanyData = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndUpdate(id, req.body);
    {
      !company ? "company did not find" : res.status(200).json(company);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateCompanyData;
