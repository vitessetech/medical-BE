const {
  getAllProduct,
  postProduct,
  deleteProduct,
  putProduct,
  getProduct,
} = require("../controllers/product");
const fs = require('fs');
const moment = require('moment')

const productRouter = require("express").Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./images/");
  },
  filename: function (req, file, callback) {
    console.log(moment(new Date()).format("DD-MM-YY_hh-mm-ss"))
    const name = file.fieldname + moment(new Date()).format("DD-MM-YY_hh-mm-ss") + "." + file.originalname.split(".")[file.originalname.split(".").length - 1]
    // console.log('name : ',name,file.fieldname);
    req.body.img_name = name
    callback(
      null,
      name
    );
  },
});

const upload = multer({storage})

productRouter.route("/")
.get(getAllProduct).post(upload.single('img'), postProduct);
productRouter
  .route("/:id")
  .get(getProduct)
  .put(upload.single('img'),putProduct)
  .delete(deleteProduct);

module.exports = productRouter;
