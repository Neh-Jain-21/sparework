const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "Name required"] },
		work_type: { type: String, required: [true, "Work type required"] },
		work_duration: { type: String, required: [true, "Work duration required"] },
		work_description: { type: String },
		pay_rate: { type: String, required: [true, "Pay Rate required"] },
		completed: { type: Boolean, default: false },
		posted_by_email: { type: String, required: [true, "Posted by required"] },
		applied_by_email: [{ email: { type: String } }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("work", workSchema);
