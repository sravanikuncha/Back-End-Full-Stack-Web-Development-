//-----------pre-written code starts----------
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //---------------pre-written code ends-----------------

  // Complete the functions below:

  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    const genre=req.params.genre;
    try{
      const booksData=await this.bookRepository.listBooksByGenre(genre);
      if(booksData){
        res.status(200).send(booksData);
      }
      else{
        res.status(400).send("genre not found");
      }
    }catch(err){
      console.log(err);
      res.status(500).send("something went wrong");
    }
  }

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    const bookId=req.params.bookId;
    const quantity=req.body.quantity;
    try{
      const bookData=await this.bookRepository.updateBookAvailability(bookId,quantity);
      if(bookData){
        res.status(200).send(bookData);
      }else{
        res.status(404).send("bookId not found");
      }
    }catch(err){
      console.log(err);
      res.status(500).send("something went wrong");
    }
  };

  //deletion of book
  deleteBook = async (req, res) => {
    const bookId=req.params.bookId;
    try{
      const bookData=await this.bookRepository.deleteBookById(bookId);
      console.log(bookData);
      if(bookData){
        res.status(200).send({"message":"Book deleted"});
      }else{
        res.status(400).send("Book not found");
      }
    }catch(err){
      res.status(500).send("something went wrong");
    }
  };
}
