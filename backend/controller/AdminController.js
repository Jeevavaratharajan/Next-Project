const { loginAdmin, getAdminById } = require("../server/AdminServer");
const { createToken, adminCookieOptions } = require("../utils/token");

const login = async (req, res) => {
  try {
    const admin = await loginAdmin(req.body);
    const token = createToken({
      adminId: admin.id,
      email: admin.email,
    });

    res.cookie("admin_token", token, adminCookieOptions);
    res.status(200).json({
      message: "Admin logged in successfully",
      data: admin,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message || "Login failed",
    });
  }
};

const me = async (req, res) => {
  try {
    const admin = await getAdminById(req.admin.adminId);

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      message: "Admin fetched successfully",
      data: admin,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to fetch admin",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("admin_token", adminCookieOptions);
  res.status(200).json({
    message: "Admin logged out successfully",
  });
};

module.exports = {
  login,
  me,
  logout,
};
