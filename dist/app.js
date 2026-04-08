"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./db/connect"));
const env_1 = __importDefault(require("./utils/env"));
const not_found_1 = require("./middleware/not-found");
const error_handler_1 = require("./middleware/error-handler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(not_found_1.notFound);
app.use(error_handler_1.errorHandlerMiddleware);
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await (0, connect_1.default)((0, env_1.default)("MONGO_URI"));
        console.log("CONNECTED TO DB...");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    }
    catch (error) {
        throw error;
    }
};
start();
