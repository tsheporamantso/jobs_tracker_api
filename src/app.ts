require("dotenv").config();
import express from "express";
import connectDB from "./db/connect";
import getEnvVariable from "./utils/env";

const app = express();

// body parser
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(getEnvVariable("MONGO_URI"));
    console.log("CONNECTED TO DB...");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    throw error;
  }
};

start();
