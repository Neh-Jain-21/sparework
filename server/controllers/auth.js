/** @format */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// MODELS
const Users = require("../database/schema/users");
const Token = require("../database/schema/tokens");

class AuthController {
	signUp = async (req, res) => {
		try {
			const userExists = await Users.findOne({ email: req.body.email }, { _id: 1 });

			if (userExists) {
				res.status(200).send({ status: 0, data: {}, message: "User Already Exists!" });
			} else {
				const encPassword = await bcrypt.hash(req.body.password, 12);

				const userCreated = await Users.create({
					name: req.body.name,
					email: req.body.email,
					password: encPassword,
				});

				res.status(200).send({ status: 1, data: userCreated, message: "Registered!" });
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
			const userExists = await Users.findOne(
				{ email: req.body.email },
				{ is_verified: 0, is_active: 0, createdAt: 0, updatedAt: 0 }
			);

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
