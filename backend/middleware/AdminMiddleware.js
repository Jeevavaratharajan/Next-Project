const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const verifyAdminAuth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null;
    const token = req.cookies.admin_token || bearerToken;

    if (!token) {
      return res.status(401).json({
        message: "Admin authentication required",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired admin session",
    });
  }
};

module.exports = {
  verifyAdminAuth,
};
