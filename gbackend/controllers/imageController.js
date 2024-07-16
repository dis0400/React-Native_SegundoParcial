const {
    addImage,
    getImages,
    getImageById,
    updateImage,
    deleteImage,
    getImagesByCategory,
    getImagesByYear,
    getImagesByMonth
  } = require('../services/imageService');
  
  const createImage = async (req, res) => {
    const image = req.body;
    try {
      const message = await addImage(image);
      res.send(message);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getAllImages = async (req, res) => {
    try {
      const images = await getImages();
      res.json(images);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getImage = async (req, res) => {
    const { id } = req.params;
    try {
      const image = await getImageById(id);
      res.json(image);
    } catch (error) {
      res.status(404).send(error.message);
    }
  };
  
  const updateImageById = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const message = await updateImage(id, updatedData);
      res.send(message);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const deleteImageById = async (req, res) => {
    const { id } = req.params;
    try {
      const message = await deleteImage(id);
      res.send(message);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getImagesByCategoryController = async (req, res) => {
    const { category } = req.params;
    try {
      const images = await getImagesByCategory(category);
      res.send(images);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getImagesByYearController = async (req, res) => {
    const { year } = req.params;
    try {
      const images = await getImagesByYear(year);
      res.send(images);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const getImagesByMonthController = async (req, res) => {
    const { month } = req.params;
    try {
      const images = await getImagesByMonth(month);
      res.send(images);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  module.exports = {
    createImage,
    getAllImages,
    getImage,
    updateImageById,
    deleteImageById,
    getImagesByCategoryController,
    getImagesByYearController,
    getImagesByMonthController
  };
  
  