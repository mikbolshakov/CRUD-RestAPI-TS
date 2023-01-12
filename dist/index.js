"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const router = (0, express_1.default)();
mongoose_1.default.connect(config_1.default.mongo.url)
    .then(() => {
    console.log("Connected to our db");
})
    .catch(error => {
    console.log(error);
});
