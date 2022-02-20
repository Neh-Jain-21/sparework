// MODELS
const Works = require("../database/schema/work");

class WorkController {
	addWork = async (req, res) => {
		try {
			const workAdded = await Works.create({
				name: req.body.name,
				work_type: req.body.work_type,
				work_duration: req.body.work_duration,
				work_description: req.body.work_description,
				pay_rate: req.body.pay_rate,
			});

			if (workAdded) {
				res.status(200).send({
					status: 1,
					data: {},
					message: "Work Posted!",
				});
			} else {
				res.status(200).send({
					status: 0,
					data: {},
					message: "Cannot post work",
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

	getWork = async (req, res) => {
		try {
			const getAllWork = await Works.find(
				null,
				{ _id: 0, createdAt: 0, updatedAt: 0, __v: 0 },
				{ sort: { createdAt: -1 } }
			);

			if (getAllWork) {
				res.status(200).send({
					status: 1,
					data: getAllWork,
					message: "Success!",
				});
			} else {
				res.status(200).send({
					status: 0,
					data: {},
					message: "Cannot get work",
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

module.exports = WorkController;
