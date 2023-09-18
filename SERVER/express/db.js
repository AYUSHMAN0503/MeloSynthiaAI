const mongoose = require("mongoose");
const config = require("./config");
const MongooseURI = config.dbUrl;

const connectDb = async () => {
  console.log(MongooseURI);
  mongoose
    .connect(MongooseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log("MongoDB Connection Failed", error));
};

module.exports = connectDb;
