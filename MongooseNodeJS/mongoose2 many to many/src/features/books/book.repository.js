// Make necessary imports here.
// Don't change the pre-written code.

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { authorSchema } from './author.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);


const authorsModel=mongoose.model('Author',authorSchema);


export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        }
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);

        book.reviews.push(savedReview._id);

        await book.save();

        return savedReview;

    }

    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }

    async updateBookAvailability(bookId, quantity) {

        console.log(bookId);
        const book = await booksModel.findById(bookId);

        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;

        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;

        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    // Complete the following four funtions.
    async createAuthor(authorData) { 
        const authorDataDB=new authorsModel(authorData);
        await authorDataDB.save();
        return authorDataDB;
    }

    async addAuthorToBook(bookId, authorId) {
        
        //getauthordetails 
        
        const authorData=await authorsModel.findByIdAndUpdate({authorId},{$push:{books:bookId}},{new:true});
        //get bookId and update with authorid in authors array
        const filter={
            _id:bookId
        };

        const updates={
            $push:{
                authors:authorId
            }
        }
        const updatedBookDoc=await booksModel.findByIdAndUpdate(filter,updates,{new:true});
        const result={
            book:updatedBookDoc,
            author:authorData
        }
        return result;
    }

    async listAuthorsByBook(bookId) { 
        //get author 
        const bookData=await booksModel.findById(bookId);
        const author=bookData.author;


        //list by authorname from authors DB

        const authorsList=await authorsModel.find(author);
        console.log(authorsList)
        return authorsList;

    }

    async listBooksByAuthor(authorId) {
        
        const bookData=await booksModel.findOne({
            "authors":{
                $elemMatch:{$in:[authorId]}
            }
        });

        console.log(bookData);
        return bookData;
     }
}