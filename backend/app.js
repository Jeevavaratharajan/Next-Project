require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");
const { FRONTEND_URL, PORT } = require("./config/env");
const propertyRouter = require("./router/ProductRouter");
const enquiryRouter = require("./router/EnquiryRouter");
const adminRouter = require("./router/AdminRouter");
const { ensureAdminSeeded } = require("./seed/seedAdmin");

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "6mb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Maple server is running",
  });
});

app.use("/api/property", propertyRouter);
app.use("/api/enquiry", enquiryRouter);
app.use("/api/admin", adminRouter);

const startServer = async () => {
  try {
    await connectDb();
    await ensureAdminSeeded();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server", error.message);
    process.exit(1);
  }
};

startServer();
