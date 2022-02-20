/** @format */

require("dotenv").config();
const cors = require("cors");
const express = require("express");

// SERVER CONFIGS
const PORT = process.env.PORT || 5000;
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// CONNECT DATABASE
require("./database/connection");

// ROUTES
const routes = require("./routes");
routes(app);

// START SERVER
app.listen(PORT, () => {
	console.log(`Server Started on Port ${PORT}`);
});
