 const dotenv = require("dotenv") ;

dotenv.config();
const MailTransponder = require("../config/MailTransponder.js")

const MailEnquiry = async (req, res) => {
  try {
    const { name, phone, email, propertyname, location, propertytype, db_id } =
      req.body;
    const mail = {
      from: process.env.MAIL_ID,
      to: process.env.TO_MAIL,
      subject: `Enquiry Regarding an Property`,
      text: `New Property Enquiry Received
      
      Client Details:
      Name:${name}
      Phone:${phone}
      Email:${email}
      
      Propert Details:
      Property Name:${propertyname}
      Property Location:${location}
      Property Type:${propertytype}
      Property ID:${db_id}`,
    };
    const response = await MailTransponder.sendMail(mail);
    if (response.accepted.length > 0) {
      res.status(200).json({ message: "Mail sent Successfully" });
    } else {
      res.status(400).json({ message: "Somrthing error in send mail" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error in Mail Enquiry",
      error: err.message,
    });
  }
};


module.exports={ MailEnquiry};