const {
  addData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
} = require("../server/ProductServer");

const createData = async (req, res) => {
  try {
    const result = await addData(req.body);
    res.status(201).json({
      message: "Property added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Unable to add property",
    });
  }
};

const getAllProperty = async (req, res) => {
  try {
    const data = await getAllData(req.query);
    res.status(200).json({
      message: "Properties fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch properties",
    });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const data = await getDataById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    return res.status(200).json({
      message: "Property fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to fetch property",
    });
  }
};

const updatePropertyById = async (req, res) => {
  try {
    const data = await updateDataById(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    return res.status(200).json({
      message: "Property updated successfully",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Unable to update property",
    });
  }
};

const deletePropertyById = async (req, res) => {
  try {
    const data = await deleteDataById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    return res.status(200).json({
      message: "Property deleted successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to delete property",
    });
  }
};

module.exports = {
  createData,
  getAllProperty,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
};
