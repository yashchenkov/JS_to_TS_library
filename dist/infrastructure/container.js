"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const books_service_1 = require("../books/books.service");
exports.container = new inversify_1.Container();
(0, inversify_1.decorate)((0, inversify_1.injectable)(), books_service_1.BookServise);
exports.container.bind(books_service_1.BookServise).toSelf().inSingletonScope();
