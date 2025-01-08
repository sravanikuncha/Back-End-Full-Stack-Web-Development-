import ExpenseRepository from "./expense.repository.js";
import ExpenseModel from "./expense.model.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    const expense=req.body;
    try{
      const expenseAdded=await ExpenseModel.addExpenseModel(expense);
      res.status(201).send(expenseAdded);
    }catch(err){
      console.log(err);
      return res.send("something is wrong");
    }
  };

  // Get a specific expense
  getOne = async (req, res) => {
    const id=req.params.id;
    try{
      const expense=await ExpenseModel.getOneExpense(id);
      // return res.status(200).send(expense);
      return res.json(expense);
    }catch(err){
      console.log(err);
      return res.send("something is wrong");
    }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try{
      const expenses=await ExpenseModel.getAllExpenses();
      res.status(200).send(expenses);
    }catch(err){
      console.log(err);
      return res.send("something is wrong");
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    const id=req.params.id;
    const tag=req.body.tag;
    try{
      const expenseObj=await ExpenseModel.addTagModel(id,tag);
      res.status(200).send(expenseObj);
    }catch(err){
      console.log(err);
      return res.send("something is wrong");
    }
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try{
      const expenseObj=await ExpenseModel.filterExpense(req.query);
      res.status(200).send(expenseObj);
    }catch(err){
      console.log(err);
      return res.send("something is wrong");
    }
  };
}
