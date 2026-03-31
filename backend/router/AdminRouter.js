const express = require("express");
const { login, me, logout } = require("../controller/AdminController");
const { verifyAdminAuth } = require("../middleware/AdminMiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/me", verifyAdminAuth, me);
router.post("/logout", verifyAdminAuth, logout);

module.exports = router;
