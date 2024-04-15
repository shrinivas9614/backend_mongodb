require("dotenv").config();
const express = require("express");
const app = express();
const errorMiddleware = require("./middleWheres/errorMiddlewhere");

app.use(express.json());

const companyRoutes = require("./Routes/companyRoutes/icompanyRoutes");

const mongoose = require("mongoose");

app.use(errorMiddleware);

app.use("/api/company", companyRoutes);

const PORT = process.env.PORT || 1080;
const MONGODB_URL = process.env.MONGO_DB_SERVER_PORT;

app.get("/", (req, res) => {
  res.send("hello localhost");
});

// get data

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
