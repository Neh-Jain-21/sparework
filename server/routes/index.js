/** @format */

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.send("Welcome to Spareworks");
	});

	app.use("/auth", require("./auth"));
	app.use("/users", require("./users"));
	app.use("/work", require("./work"));
};
