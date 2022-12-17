const {
  getAllUdhari,
  postUdhari,
  deleteUdhari,
  putUdhari,
  getUdhari,
} = require("../controllers/udhari");

const udhariRouter = require("express").Router();

udhariRouter.route("/").get(getAllUdhari).post(postUdhari);
udhariRouter.route("/:id").get(getUdhari).put(putUdhari).delete(deleteUdhari);

module.exports = udhariRouter;
