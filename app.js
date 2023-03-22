require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const db = require("./utils/database");
const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({extended: true})); 

app.use(express.static('images'));
// db.sync({ force: true }).then(() => {
// });

// routes
// const udhariRouter = require("./routes/udhari");
const productRouter = require("./routes/product");


const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage});




// app.use("/customers", customerRouter);
// app.use("/udharis", udhariRouter);
app.use("/products", productRouter);
app.use("/banners", productRouter);

app.listen(process.env.PORT, () =>
  console.log("Server running on: ", process.env.PORT)
);
