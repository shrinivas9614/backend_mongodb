const Company = require("../../modles/companyModle");

const deleteCompanyData = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndDelete(id);
    if (!company) {
      res.status(404).json({ message: "cannot find the company" });
    }
    res.status(200).json(company);

    console.log("data", company);
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteCompanyData;
