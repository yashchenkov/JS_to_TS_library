"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UrlDB = 'mongodb://root:example@mongo:27017/';
mongoose_1.default.connect(UrlDB);
exports.db = mongoose_1.default.connection;
exports.db.on('open', () => {
    console.log('Connected to mongodb');
});
