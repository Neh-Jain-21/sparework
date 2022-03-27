// MODELS
const Users = require("../database/schema/users");

class UserController {
	recentUsers = async (req, res) => {
		try {
			const recentProviders = await Users.find(
				{ type: "Provider" },
				{ _id: 0, name: 1, title: 1, description: 1, image: 1 },
				{ limit: 5, sort: { createdAt: -1 } }
			);

			const recentWorkers = await Users.find(
				{ type: "Worker" },
				{ _id: 0, name: 1, title: 1, description: 1, image: 1 },
				{ limit: 5, sort: { createdAt: -1 } }
			);

			const [providerResponse, workerResponse] = await Promise.all([recentProviders, recentWorkers]);

			if (providerResponse && workerResponse) {
				res.status(200).send({
					status: 1,
					data: { providers: providerResponse, workers: workerResponse },
					message: "Success!",
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
