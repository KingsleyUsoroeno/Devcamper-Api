const mongoose = require("mongoose");

const connectDb = async () => {
  let connection = {};
  if (process.env.NODE_ENV == "development") {
    connection = await mongoose.connect(process.env.MONGO_DB_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } else {
    connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }
  console.log(`Mongodb connected: ${connection.connection.host}`);
};

module.exports = connectDb;
