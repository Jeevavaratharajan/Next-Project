const ProductModel = require("../models/ProductModel");

const normalizePropertyPayload = (payload) => ({
  PropertyName: payload.PropertyName?.trim(),
  Location: payload.Location?.trim(),
  Description: payload.Description?.trim(),
  PropertyType: payload.PropertyType?.trim(),
  Image: Array.isArray(payload.Image) ? payload.Image.filter(Boolean) : [],
  Parking: payload.Parking === true || payload.Parking === "true",
  Pets: payload.Pets === true || payload.Pets === "true",
});

const addData = async (data) => {
  const normalizedPayload = normalizePropertyPayload(data);
  return ProductModel.create(normalizedPayload);
};

const getAllData = async ({ type }) => {
  const filter = {};
  if (type) {
    filter.PropertyType = type;
  }
  return ProductModel.find(filter).sort({ createdAt: -1 });
};

const getDataById = async (id) => ProductModel.findById(id);

const updateDataById = async (id, data) =>
  ProductModel.findByIdAndUpdate(id, normalizePropertyPayload(data), {
    new: true,
    runValidators: true,
  });

const deleteDataById = async (id) => ProductModel.findByIdAndDelete(id);

module.exports = {
  addData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
};
