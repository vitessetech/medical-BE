const {
  getAllUser,
  postUser,
  deleteUser,
  putUser,
  getUser,
} = require("../controllers/customer");

const customerRouter = require("express").Router();

customerRouter.route("/").get(getAllUser).post(postUser);
customerRouter.route("/:id").get(getUser).put(putUser).delete(deleteUser);

module.exports = customerRouter;
