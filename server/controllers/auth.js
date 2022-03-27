/** @format */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
// MODELS
const Users = require("../database/schema/users");
const Token = require("../database/schema/tokens");
// CONFIGS
const sendEmail = require("../configs/mailer");

class AuthController {
	signUp = async (req, res) => {
		try {
			const userExists = await Users.findOne({ email: req.body.email }, { _id: 1 });

			if (userExists) {
				res.status(200).send({ status: 0, data: {}, message: "User Already Exists!" });
			} else {
				const encPassword = await bcrypt.hash(req.body.password, 12);
				const random = Math.floor(100000000 + Math.random() * 900000000);

				const userCreated = await Users.create({
					name: req.body.name,
					email: req.body.email,
					password: encPassword,
					verify_id: random,
				});

				if (userCreated) {
					const link = `${req.protocol}://${req.get("host")}/auth/verify-email?id=${random}&userid=${userCreated._id}`;

					let emailSent = true;

					const callBack = async (error, info) => {
						if (error) {
							console.log(error);

							emailSent = false;
						} else {
							emailSent = true;
						}
					};

					sendEmail(
						req.body.email,
						"Confirm Email",
						`Hello,<br> Please Click on the link to verify your email.<br><a href=${link}>Click here to verify</a>`,
						callBack
					);

					if (emailSent) {
						res.status(200).send({ status: 1, data: {}, message: "Welcome! Please verify your email" });
					} else {
						await Users.deleteOne({ _id: userCreated._id });

						res.status(200).send({
							status: 0,
							data: {},
							message: "Cannot send email!",
						});
					}
				} else {
					res.status(200).send({
						status: 0,
						data: {},
						message: "Something went wrong",
					});
				}
			}
		} catch (error) {
			res.status(500).send({
				status: 0,
				error: error.errors ? error.errors[Object.keys(error.errors)[0]].message : error,
				message: "Internal Server Error!",
			});
		}
	};

	login = async (req, res) => {
		try {
			const userExists = await Users.findOne({ email: req.body.email }, { is_verified: 0, is_active: 0, createdAt: 0, updatedAt: 0 });

			// Check user exists
			if (userExists) {
				// check password correct
				const passCorrect = await bcrypt.compare(req.body.password, userExists.password);

				if (passCorrect) {
					// generate jwt token
					const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET);

					const tokenAvailable = await Token.findOne({ user_id: userExists._id }, { _id: 0, user_id: 1 });

					if (tokenAvailable) {
						await Token.updateOne({ user_id: userExists._id }, { auth_token: token });
					} else {
						await Token.create({ user_id: userExists._id, auth_token: token });
					}

					res.status(200).send({
						status: 1,
						data: {
							email: userExists.email,
							name: userExists.name,
							title: userExists.title,
							description: userExists.description,
							image: userExists.image,
							type: userExists.type,
							token,
						},
						message: "Welcome!",
					});
				} else {
					res.status(200).send({
						status: 0,
						data: {},
						message: "Incorrect password",
					});
				}
			} else {
				res.status(200).send({
					status: 0,
					data: {},
					message: "User not found, please signup first",
				});
			}
		} catch (error) {
			res.status(500).send({
				status: 0,
				error: error.errors ? error.errors[Object.keys(error.errors)[0]].message : error,
				message: "Internal Server Error!",
			});
		}
	};

	async verifyEmail(req, res) {
		try {
			const userFound = await Users.findOne({ _id: req.query.userid });

			if (userFound) {
				if (userFound.is_verified) {
					res.sendFile(path.resolve("views/alreadyVerified.html"));
				} else {
					if (parseInt(req.query.id) === userFound.verify_id) {
						const updated = await Users.updateOne({ _id: req.query.userid }, { is_verified: true, $unset: { verify_id: 1 } });

						if (updated) {
							res.sendFile(path.resolve("views/verifyEmail.html"));
						} else {
							res.status(400).send("Incorrect credentials");
						}
					} else {
						res.status(400).send("Incorrect credentials");
					}
				}
			} else {
				res.status(404).send("User not found");
			}
		} catch (error) {
			console.log(error);
			res.status(500).send({
				status: 0,
				error: error.errors ? error.errors[Object.keys(error.errors)[0]].message : error,
				message: "Internal Server Error!",
			});
		}
	}

	userProfile = async (req, res) => {
		try {
			const user = await Users.findOne(
				{ email: req.body.email },
				{ _id: 0, password: 0, is_verified: 0, is_active: 0, createdAt: 0, updatedAt: 0, __v: 0 }
			);

			if (user) {
				res.status(200).send({
					status: 1,
					data: user,
					message: "Success",
				});
			} else {
				res.status(200).send({
					status: 0,
					data: {},
					message: "Something went wrong!",
				});
			}
		} catch (error) {
			res.status(500).send({
				status: 0,
				error: error.errors ? error.errors[Object.keys(error.errors)[0]].message : error,
				message: "Internal Server Error!",
			});
		}
	};
}

module.exports = AuthController;
