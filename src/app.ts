require("dotenv").config();
import express from "express";

const app = express();

// body parser
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    throw error;
  }
};

start();
