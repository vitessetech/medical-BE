const {
  getAllProduct,
  postProduct,
  deleteProduct,
  putProduct,
  getProduct,
} = require("../controllers/product");

const productRouter = require("express").Router();

productRouter.route("/").get(getAllProduct).post(postProduct);
productRouter
  .route("/:id")
  .get(getProduct)
  .put(putProduct)
  .delete(deleteProduct);

module.exports = productRouter;
