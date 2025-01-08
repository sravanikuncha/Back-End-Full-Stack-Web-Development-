// -------------pre-written code starts---------------
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

export default class BookRepository {

    //book creation
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    // filtering of book by id
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    // ------------prewritten code ends----------------


    // Complete the following functions:

    //filtering the books based on genre
    async listBooksByGenre(genre) { 
        return await booksModel.find({genre:genre});
    }

    //increasing the count of available books
    async updateBookAvailability(bookId, quantity) {

        const updates={
            $inc:{
                availableCopies:quantity
            }
        }
        const bookData=await booksModel.findByIdAndUpdate({_id:bookId},updates,{new:true});
        return bookData;

     }

    //deletion of book
    async deleteBookById(bookId) {
        return await booksModel.findOneAndDelete({_id:bookId});
     }
}