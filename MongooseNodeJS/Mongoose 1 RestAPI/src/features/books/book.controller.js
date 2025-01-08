import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        try {
            const bookData = req.body;
            const newBook = await this.bookRepository.createBook(bookData);
            res.status(201).json(newBook);
        } catch (err) {
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }

    // filtering of book by id
    getOne = async (req, res) => {
        try {
            const { bookId } = req.params
            const book = await this.bookRepository.getOne(bookId);
            if (!book) {
                return res.status(404).send('Book not found');
            }
            res.status(200).json(book);

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: error.message });
        }
    }

}
