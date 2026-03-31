const bcrypt = require("bcryptjs");
const AdminModel = require("../models/AdminModel");
const { ADMIN_EMAIL, ADMIN_PASSWORD } = require("../config/env");

const sanitizeAdmin = (admin) => ({
  id: admin._id,
  name: admin.name,
  email: admin.email,
});

const ensureAdmin = async () => {
  const existingAdmin = await AdminModel.findOne({
    email: ADMIN_EMAIL.toLowerCase(),
  });

  if (existingAdmin) {
    return sanitizeAdmin(existingAdmin);
  }

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const admin = await AdminModel.create({
    name: "Admin",
    email: ADMIN_EMAIL.toLowerCase(),
    password: hashedPassword,
  });

  return sanitizeAdmin(admin);
};

const loginAdmin = async ({ email, password }) => {
  const admin = await AdminModel.findOne({
    email: email?.toLowerCase(),
  });

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return sanitizeAdmin(admin);
};

const getAdminById = async (id) => {
  const admin = await AdminModel.findById(id);
  return admin ? sanitizeAdmin(admin) : null;
};

module.exports = {
  ensureAdmin,
  loginAdmin,
  getAdminById,
};
