require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  let text = "nom :"+ name + "\r"
    + "email :"+ email + "\r"
    + "message :"+ message;
  let to = "maheutnicolas30@gmail.com";
  let subject = "Nouveau Contact";
  try {
        const info = await transporter.sendMail({
      from: '"Mon App" <no-reply@monapp.com>',
      to,
      subject,
      text,
    });


    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));