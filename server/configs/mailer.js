/** @format */

const nodemailer = require("nodemailer");

const sendEmail = (to, subject, html, callBack) => {
	//set mail transporter
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		requireTLS: true,
		secure: false,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});

	const mailOptions = {
		from: `"Sparework" <${process.env.EMAIL}>`,
		to: to,
		subject: subject,
		html: html,
	};

	transporter.sendMail(mailOptions, callBack);
};

module.exports = sendEmail;
