const express = require("express");
const router = express.Router();
const {
  createData,
  getAllProperty,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
} = require("../controller/ProductController");
const { verifyAdminAuth } = require("../middleware/AdminMiddleware");

router.get("/", getAllProperty);
router.get("/:id", getPropertyById);
router.post("/", verifyAdminAuth, createData);
router.patch("/:id", verifyAdminAuth, updatePropertyById);
router.delete("/:id", verifyAdminAuth, deletePropertyById);

module.exports = router;
