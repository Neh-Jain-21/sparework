const mongoose = require("mongoose");
const { Schema } = mongoose;

const tokenSchema = new Schema(
	{
		user_id: { type: Schema.Types.ObjectId },
		auth_token: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("token", tokenSchema);
