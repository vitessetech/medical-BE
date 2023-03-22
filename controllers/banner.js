const Banner = require("../models/banner");

const getAllBanner = async (req, res) => {
  const { page } = req.query;

  let { count, rows } = await Banner.findAndCountAll({
    limit: 10,
    offset: Number(page) * 10,
    order: [
      ['id', 'DESC'],
  ],
  });
  res.status(200).json({ count, rows });
};
const postBanner = async (req, res) => {
  const {name, img} = req.body;
  const banner = await Banner.create(req.body);
  res.status(201).json({ banner });
};
const getBanner = async (req, res) => {
  const { id } = req.params;

  const banner = await Banner.findOne({ id });
  res.status(202).json({ banner });
};
const putBanner = async (req, res) => {
  const { id } = req.params;
  const {name, img} = req.body;
  const banner = await Banner.update(req.body, { where: { id } });
  res.status(202).json({ ...{ id, name, img,msg : 'Tada' } });
};
const deleteBanner = async (req, res) => {
  const { id } = req.params;
  const banner = await Banner.destroy({ where: { id } });
  res.status(204).json({ banner });
};

module.exports = {
  getAllBanner,
  postBanner,
  getBanner,
  putBanner,
  deleteBanner,
};
