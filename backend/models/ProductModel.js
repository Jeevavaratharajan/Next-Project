const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    PropertyName: {
      type: String,
      required: true,
      trim: true,
    },
    Location: {
      type: String,
      required: true,
      trim: true,
    },
    Description: {
      type: String,
      required: true,
      trim: true,
    },
    PropertyType: {
      type: String,
      required: true,
      enum: ["1BHK", "2BHK", "3BHK", "Studio", "Villa"],
    },
    Image: {
      type: [String],
      default: [],
      validate: {
        validator: (value) => value.length > 0 && value.length <= 4,
        message: "Add between 1 and 4 images",
      },
    },
    Parking: {
      type: Boolean,
      default: false,
    },
    Pets: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
