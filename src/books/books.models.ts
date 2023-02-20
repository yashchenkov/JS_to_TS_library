import mongoose, { Document, Schema } from 'mongoose'
import Book from './books'

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    authors: {
        type: String,
        required: true,
    },
    favorite: {
        type: String,
        default: "",
    },
    fileCover: {
        type: String,
        default: "",
    },
    fileName: {
        type: String,
        default: "",
    },
    messages: {
        type: Array,
        default: [],
    },
    fileBook: {
        type: String,
        default: "",
    },
})

export const BookModels = mongoose.model<Book & Document>('Book', schema)