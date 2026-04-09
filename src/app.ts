import "dotenv/config";
import express from "express";
import connectDB from "./db/connect";
import jobsRouter from "./routes/jobs";
import authRouter from "./routes/auth";
import getEnvVariable from "./utils/env";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";

const app = express();

// body parser
app.use(express.json());

// routes
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/auth", authRouter);

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

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
