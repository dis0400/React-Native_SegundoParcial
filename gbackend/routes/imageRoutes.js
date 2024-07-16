const express = require('express');
const {
  createImage,
  getAllImages,
  getImage,
  updateImageById,
  deleteImageById,
  getImagesByCategoryController,
  getImagesByYearController,
  getImagesByMonthController
} = require('../controllers/imageController');

const router = express.Router();

router.post('/images', createImage);
router.get('/images', getAllImages);
router.get('/images/:id', getImage);
router.put('/images/:id', updateImageById);
router.delete('/images/:id', deleteImageById);
router.get('/images/category/:category', getImagesByCategoryController);
router.get('/images/year/:year', getImagesByYearController);
router.get('/images/month/:month', getImagesByMonthController);

module.exports = router;

