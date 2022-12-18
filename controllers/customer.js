const Customer = require("../models/customer");

const getAllUser = async (req, res) => {
  const { page } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let { count, rows } = await Customer.findAndCountAll({
    limit: 10,
    offset: Number(page) * 10,
    order: [["id", "DESC"]],
  });
  // console.log(startIndex, endIndex, page);
  // rows = await rows.slice(startIndex, endIndex);
  res.status(200).json({ count, rows });
};
const postUser = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({ customer });
};
const getUser = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findOne({ id });
  res.status(202).json({ customer });
};
const putUser = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.update(req.body, { where: { id } });
  res.status(202).json({ ...{ id, ...req.body } });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.destroy({ where: { id } });
  res.status(204).json({ customer });
};

module.exports = {
  getAllUser,
  postUser,
  getUser,
  putUser,
  deleteUser,
};
