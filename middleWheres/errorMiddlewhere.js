require("dotenv").config();

const errorMiddleware = (err, req, res, next) => {
  console.log("this is a error middleware");
  //   const statusCode = res.statusCode ? res.statusCode : 500;
  //   res.status(statusCode);
  //   res.json({
  //     message: err.message,
  //     stack: process.env.ERROR_MIDLEWHERE === "devlopement" ? err.stack : null,
  //   });
};

module.exports = errorMiddleware;
