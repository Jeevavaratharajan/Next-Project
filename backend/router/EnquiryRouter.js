const express = require("express");
const Enquiryrouter = express.Router();
const { MailEnquiry } = require("../controller/EnquiryController");

Enquiryrouter.post("/enquiry", MailEnquiry);

module.exports = Enquiryrouter;
