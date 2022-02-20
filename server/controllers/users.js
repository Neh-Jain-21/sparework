// MODELS
const Users = require("../database/schema/users");

class UserController {
	recentProviders = async (req, res) => {
		try {
			const userList = await Users.find(
				{ type: "Provider" },
				{ _id: 0, name: 1, title: 1, description: 1, image: 1 },
				{ limit: 5, sort: { createdAt: -1 } }
			);

			if (userList) {
				res.status(200).send({
					status: 1,
					data: userList,
					message: "Welcome!",
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

	recentWorkers = async (req, res) => {
		try {
			const userList = await Users.find(
				{ type: "Worker" },
				{ _id: 0, name: 1, title: 1, description: 1, image: 1 },
				{ limit: 5, sort: { createdAt: -1 } }
			);

			if (userList) {
				res.status(200).send({
					status: 1,
					data: userList,
					message: "Welcome!",
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

module.exports = UserController;
