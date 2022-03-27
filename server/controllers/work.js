// MODELS
const Works = require("../database/schema/work");

class WorkController {
	addWork = async (req, res) => {
		try {
			const workAdded = await Works.create({
				name: req.body.name,
				posted_by_email: req.body.posted_by_email,
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
			const getAllWork = await Works.find({ completed: false }, { createdAt: 0, updatedAt: 0, __v: 0 }, { sort: { createdAt: -1 } });

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

	getUserWork = async (req, res) => {
		try {
			if (!req.body.email || !req.body.type) {
				res.status(200).send({
					status: 0,
					data: {},
					message: "Please login first",
				});
			} else {
				let userWorks = null;
				if (req.body.type === "Provider") {
					userWorks = await Works.find(
						{ posted_by_email: req.body.email },
						{ __v: 0, updatedAt: 0, createdAt: 0, applied_by_email: 0, posted_by_email: 0 }
					);
				} else {
					userWorks = await Works.find(
						{ applied_by_email: { $elemMatch: { email: req.body.email } } },
						{ __v: 0, updatedAt: 0, createdAt: 0, applied_by_email: 0, posted_by_email: 0 }
					);
				}

				if (userWorks) {
					res.status(200).send({
						status: 1,
						data: userWorks,
						message: "Success!",
					});
				} else {
					res.status(200).send({
						status: 0,
						data: {},
						message: "Something went wrong!",
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

	applyWork = async (req, res) => {
		try {
			if (!req.body.id || !req.body.email) {
				res.status(200).send({
					status: 0,
					data: {},
					message: "Please login first",
				});
			} else {
				const alreadyApplied = await Works.findOne({ _id: req.body.id, applied_by_email: { $elemMatch: { email: req.body.email } } });

				if (alreadyApplied) {
					res.status(200).send({
						status: 0,
						data: {},
						message: "Already applied!",
					});
				} else {
					const applyWork = await Works.updateOne({ _id: req.body.id }, { $push: { applied_by_email: { email: req.body.email } } });

					if (applyWork) {
						res.status(200).send({
							status: 1,
							data: applyWork,
							message: "Applied!, We have shared details to Provider",
						});
					} else {
						res.status(200).send({
							status: 0,
							data: {},
							message: "Cannot apply work",
						});
					}
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

	workCompleted = async (req, res) => {
		try {
			const completed = await Works.updateOne({ _id: req.body.id }, { completed: true });

			if (completed) {
				res.status(200).send({
					status: 1,
					data: completed,
					message: "Congrats! Work Completed",
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

module.exports = WorkController;
