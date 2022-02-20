const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "Name required"] },
		email: { type: String, required: [true, "Email required"], unique: true },
		// contact: {
		// 	type: String,
		// 	required: [true, "Contact required"],
		// 	maxlength: [10, "Maximum lenght 10"],
		// 	minlength: [10, "Minimum length 10"],
		// 	unique: true,
		// },
		password: { type: String, required: [true, "Password required"] },
		title: { type: String, default: "" },
		description: { type: String, default: "" },
		image: { type: String, default: "" },
		type: {
			type: String,
			// 	enum: {
			// 		values: ["Provider", "Worker"],
			// 		message: "{VALUE} not supported",
			// 	},
			// 	required: [true, "Type required"],
			default: "",
		},
		is_verified: { type: Boolean, required: false, default: false },
		is_active: { type: Boolean, required: false, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", usersSchema);
