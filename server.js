require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const Company = require("./modles/companyModle");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 1080;
const MONGODB_URL = process.env.MONGO_DB_SERVER_PORT;

app.get("/", (req, res) => {
  res.send("hello localhost");
});

// get data
app.get("/company", async (req, res) => {
  try {
    const company = await Company.find({});
    res.status(200).json(company);
  } catch (error) {
    console.log(error);
  }
});

// search data
app.get("/company/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json(company);
    console.log("data", company);
  } catch (error) {
    console.log(error);
  }
});

// delete
app.delete("/company/:id", async (req, res) => {
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
});

// post data
app.post("/company", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(200).json(company);
    console.log("data added successfully", company);
  } catch (error) {
    console.log(error);
  }
});

// update data
app.put("/company/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndUpdate(id, req.body);
    {
      !company ? "company did not find" : res.status(200).json(company);
    }
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
      console.log("listening on localhost 1080");
    });
  })
  .catch((err) => {
    console.log("error connecting to mongoDB");
  });

//
