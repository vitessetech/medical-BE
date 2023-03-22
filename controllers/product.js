const Product = require("../models/product");
const fs = require('fs');
const path = require('path');
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
  res.status(200).json({ count, rows });
};
const postProduct = async (req, res) => {
  req.body.img = req.body.img_name;
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
  console.log(9999)
if(req.file) {
  // means new file requested to alter
  //1) found product
  //2) get its path
  // 3) remove it
  // 4) add new file with change in body.img_name
  const product = await Product.findOne({ id });
  console.log('product path');
  console.log(product.img)
  req.body.img = req.body.img_name;
  let {isExist, imgPath} = checkFileExists(product.img)
  console.log(isExist);
  if(isExist) {
    removeFile(imgPath)
  }
  await Product.update(req.body, { where: { id } });
  
 }
 else {
  // as that is
  // console.log(foundProduct)
  const product = await Product.update(req.body, { where: { id } });

}
res.status(202).json({ ...{ id, ...req.body,msg : 'Tada' } });
 
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const foundProduct = await Product.findOne({ id });
  let {isExist, imgPath} = await checkFileExists(foundProduct.img)

  console.log(isExist)
  if(isExist) {
    removeFile(imgPath)
  }

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


function removeFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return false
    }
    // success!
    console.log('File deleted!');
    return true;
  });
  return false;
}
function checkFileExists(fileName) {
  const imgPath = path.join(__dirname.slice(0,-11), 'images', fileName);
  console.log(imgPath)
  return {isExist : fs.existsSync(imgPath), imgPath};
}