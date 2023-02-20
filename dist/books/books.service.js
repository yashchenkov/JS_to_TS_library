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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServise = void 0;
const books_models_1 = require("./books.models");
class BookServise {
    constructor() {
        console.log('New BookServise');
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = new books_models_1.BookModels(data);
            yield book.save();
            return book;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield books_models_1.BookModels.find().select('-__v');
            return books;
        });
    }
    findId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield books_models_1.BookModels.findById(id).select('-__v');
            return books;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield books_models_1.BookModels.findByIdAndUpdate(id, data).select('-__v');
            return books;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield books_models_1.BookModels.deleteOne({ _id: id });
        });
    }
}
exports.BookServise = BookServise;
