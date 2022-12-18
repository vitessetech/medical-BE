const Product = require("../models/product");

const getAllProduct = async (req, res) => {
  const { page } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let { count, rows } = await Product.findAndCountAll({
    limit: 10,
    offset: Number(page) * 10,
    order: [
      ['id', 'DESC'],
  ],
  });
  // console.log(startIndex, endIndex, page);
  // rows = await rows.slice(startIndex, endIndex);
  res.status(200).json({ count, rows });
};
const postProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};
const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ id });
  res.status(202).json({ product });
};
const putProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.update(req.body, { where: { id } });
  res.status(202).json({ ...{ id, ...req.body } });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.destroy({ where: { id } });
  res.status(204).json({ product });
};

module.exports = {
  getAllProduct,
  postProduct,
  getProduct,
  putProduct,
  deleteProduct,
};
