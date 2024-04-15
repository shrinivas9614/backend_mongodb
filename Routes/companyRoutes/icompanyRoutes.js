const Company = require("../../modles/companyModle");
const express = require("express");
const updateCompanyData = require("../componants/updateData");
const searchCompanyData = require("../componants/searchData");
const deleteCompanyData = require("../componants/deleteData");
const getCompanyData = require("../componants/getData");
const postCompanyData = require("../componants/postData");

const router = express.Router();
// get data
router.get("/", getCompanyData);

// search data
router.get("/:id", searchCompanyData);

// delete
router.delete("/:id", deleteCompanyData);

// post data
router.post("/company", postCompanyData);

// update data
router.put("/:id", updateCompanyData);

module.exports = router;
