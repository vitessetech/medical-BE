const Customer = require("../models/customer");

const getAllUser = async (req, res) => {
  const customers = await Customer.findAll({ where: { ...req.query } });
  res.status(200).json({ data: customers });
};
const postUser = async (req, res) => {
  console.log(req.body);
  const customer = await Customer.create(req.body);
  res.status(201).json({ data: customer });
};
const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const customer = await Customer.findOne({ id });
  res.status(202).json({ data: customer });
};
const putUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const customer = await Customer.update(req.body, { where: { id } });
  res.status(202).json({ data: { id, ...req.body } });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.destroy({ where: { id } });
  res.status(204).json({ data: customer });
};

module.exports = {
  getAllUser,
  postUser,
  getUser,
  putUser,
  deleteUser,
};
