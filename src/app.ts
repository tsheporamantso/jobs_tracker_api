import "dotenv/config";
import express from "express";
import connectDB from "./db/connect";
import jobsRouter from "./routes/jobs";
import authRouter from "./routes/auth";
import getEnvVariable from "./utils/env";
import { notFound } from "./middleware/not-found";
import { authentication } from "./middleware/authMiddleware";
import { errorHandlerMiddleware } from "./middleware/error-handler";

import cors from "cors";
import helmet from "helmet";
import { limiter } from "./middleware/rateLimiter";

// swagger
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

// body parser
app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(limiter);

// routes
app.use("/api/v1/jobs", authentication, jobsRouter);
app.use("/api/v1/auth", authRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

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
