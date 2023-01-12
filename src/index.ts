import express from "express";
import mongoose from "mongoose";
import config from "./config"
import dotenv from 'dotenv';
dotenv.config();
import authorRoutes from "./routes/Author"

// const router = express()

const app = express();
app.use(express.json());
app.use("/auth", () => console.log("Hi"))
app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }))


async function startApp() {
    try {
        mongoose.connect(config.mongo.url, () => console.log("Connected to db"));
        await app.listen(config.server.port, () => console.log("Server is working on port " + config.server.port));
    } catch (error) {
        console.log(error);
    }
}

startApp();
