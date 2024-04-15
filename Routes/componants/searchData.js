const searchCompanyData = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json(company);
    console.log("data", company);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchCompanyData;
