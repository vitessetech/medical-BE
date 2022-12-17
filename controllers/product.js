const Product = require("../models/product");

const getAllProduct = async (req, res) => {
  const products = await Product.findAll({ where: { ...req.query } });
  res.status(200).json({ data: products });
};
const postProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(201).json({ data: product });
};
const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const product = await Product.findOne({ id });
  res.status(202).json({ data: product });
};
const putProduct = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const product = await Product.update(req.body, { where: { id } });
  res.status(202).json({ data: { id, ...req.body } });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.destroy({ where: { id } });
  res.status(204).json({ data: product });
};

module.exports = {
  getAllProduct,
  postProduct,
  getProduct,
  putProduct,
  deleteProduct,
};
