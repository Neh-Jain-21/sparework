/** @format */

const mongoose = require("mongoose");

const URL = process.env.MONGOOSE_URL || "mongodb://localhost:27017/media_host";

mongoose
    .connect(URL, { dbName: process.env.DB_NAME })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((reason) => {
        console.log(reason);
    });

module.exports = mongoose;
