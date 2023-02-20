"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const db_1 = require("./infrastructure/db");
const PORT = process.env.PORT || 7070;
const app = (0, express_1.default)();
app.engine('html', require('ejs').renderFile);
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static('public/'));
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use('/', bookRoutes_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Server listener  on port ${PORT}`);
        yield db_1.db;
    }
    catch (e) {
        console.log(e);
    }
}));
