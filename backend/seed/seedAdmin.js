const { ensureAdmin } = require("../server/AdminServer");

const ensureAdminSeeded = async () => {
  const admin = await ensureAdmin();
  console.log(`Admin ready: ${admin.email}`);
  return admin;
};

module.exports = {
  ensureAdminSeeded,
};
