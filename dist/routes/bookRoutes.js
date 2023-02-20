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
const container_1 = require("../infrastructure/container");
const books_service_1 = require("../books/books.service");
const file_1 = __importDefault(require("../middleware/file"));
const router = express_1.default.Router();
const servise = container_1.container.get(books_service_1.BookServise);
router.get('/api/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield servise.findAll();
        res.render("books/index", {
            title: "Книги",
            books: books,
        });
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.get('/api/create/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render("books/create", {
            title: "Создать книгу",
            book: []
        });
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.post('/api/create/', file_1.default.single('fileBook'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const data = {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
        fileBook: (file === null || file === void 0 ? void 0 : file.originalname) || undefined
    };
    try {
        const books = yield servise.create(data);
        res.redirect('/api/books');
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.get('/api/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield servise.findId(id);
        res.render("books/view", {
            title: "Книга ",
            book: book,
            idBook: id,
        });
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.get('/api/book/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield servise.findId(id);
        res.render("books/update", {
            title: "Книга ",
            book: book,
            idBook: id,
        });
    }
    catch (e) {
        res.status(404);
        res.json('404 | страница не найдена');
    }
}));
router.post('/api/book/update/:id', file_1.default.single('fileBook'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const { id } = req.params;
    const data = {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
        fileBook: (file === null || file === void 0 ? void 0 : file.originalname) || undefined
    };
    try {
        const books = yield servise.update(id, data);
        res.redirect(`/api/books`);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.post('/api/book/remove/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const books = yield servise.delete(id);
        res.redirect(`/api/books`);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
exports.default = router;
