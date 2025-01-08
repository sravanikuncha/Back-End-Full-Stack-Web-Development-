import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

const BookModel = mongoose.model('Book', bookSchema);

export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            const newBook = new BookModel(bookData);
            return await newBook.save();
        } catch (err) {
            console.log(err);
            throw new Error(err.message);
        }
    }

    //filtering the book by id
    async getOne(id) {
        try {
            const book = await BookModel.findById(id).populate('author');
            return book;
        } catch (err) {
            console.log(err);
            throw new Error('Book not found');
        }
    }
}