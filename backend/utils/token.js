const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const createToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });

const adminCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

module.exports = {
  createToken,
  adminCookieOptions,
};
