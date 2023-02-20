import { BookModels } from './books.models'
import Book from './books'


interface CreateBookDto {
    title: Book['title'];
    description: Book['description'];
    authors: Book['authors'];
    favorite: Book['favorite'];
    fileCover: Book['fileCover'];
    fileName: Book['fileName'];
    fileBook?: Book['fileBook'];
}

export class BookServise {
    constructor() {
        console.log('New BookServise');
    }

    async create(data: CreateBookDto): Promise<Book> {
        const book = new BookModels(data);
        await book.save();
        return book;
    }

    async findAll(): Promise<Book[]> {
        const books = await BookModels.find().select('-__v')
        return books;
    }

    async findId(id: string): Promise<Book | null> {
        const books = await BookModels.findById(id).select('-__v')
        return books;
    }

    async update(id: string, data: CreateBookDto): Promise<Book | null> {
        const books = await BookModels.findByIdAndUpdate(id, data).select('-__v')
        return books;
    }

    async delete(id: string): Promise<void> {
        const books = await BookModels.deleteOne({ _id: id });
    }
}