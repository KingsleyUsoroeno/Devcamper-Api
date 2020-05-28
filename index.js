const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDb = require("./config/db");

const app = express();

// Body-parser
app.use(express.json());

// load our config files from our config folder
dotenv.config({ path: "./config/config.env" });

//Connect to db
connectDb();

const PORT = process.env.PORT || 5000;

// Route files
const bootcamps = require("./routes/bootcamps");

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// Dev logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//app.use(logger);

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
