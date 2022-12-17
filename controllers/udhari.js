const Udhari = require("../models/udhari");

const getAllUdhari = async (req, res) => {
  const udharis = await Udhari.findAll({ where: { ...req.query } });
  res.status(200).json({ data: udharis });
};
const postUdhari = async (req, res) => {
  console.log(req.body);
  const udhari = await Udhari.create(req.body);
  res.status(201).json({ data: udhari });
};
const getUdhari = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const udhari = await Udhari.findOne({ id });
  res.status(202).json({ data: udhari });
};
const putUdhari = async (req, res) => {
  const { id } = req.params;
  console.log(req.body, id);
  const udhari = await Udhari.update(req.body, { where: { id } });
  res.status(202).json({ data: { id, ...req.body } });
};
const deleteUdhari = async (req, res) => {
  const { id } = req.params;
  const udhari = await Udhari.destroy({ where: { id } });
  res.status(204).json({ data: udhari });
};

module.exports = {
  getAllUdhari,
  postUdhari,
  getUdhari,
  putUdhari,
  deleteUdhari,
};
