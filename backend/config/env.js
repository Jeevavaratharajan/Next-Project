const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.URL || "mongodb://localhost:27017/Project";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const JWT_SECRET = process.env.JWT_SECRET || "maple-dev-secret";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@maplerentals.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@12345";

module.exports = {
  PORT,
  MONGODB_URL,
  FRONTEND_URL,
  JWT_SECRET,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
};
