import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    const db=getDB();
    const collection=db.collection(this.collectionName);
    try{
      await collection.insertOne(expense);
      return expense;
    }catch(err){
      console.log(err);
      return "somethng is wrong";
    }
  }

  // Get one expnese by its ID
  async getOne(id) {
    const db=getDB();
    const collection=db.collection(this.collectionName);
    try{
      const expensesObj=await collection.findOne({_id:new ObjectId(id)});
      return expensesObj;
    }catch(err){
      console.log(err);
      return "somethng is wrong";
    }
  }

  // Get all expenses
  async getAllExpenses() {
    const db=getDB();

    const collection=db.collection(this.collectionName);
    try{
      const expensesObj=await collection.find().toArray();
      return expensesObj;
    }catch(err){
      console.log(err);
      return "somethng is wrong";
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    const db=getDB();

    const collection=db.collection(this.collectionName);
    try{
      await collection.updateOne({_id:new ObjectId(id)},{$push:{tags:tag}});
      const expensesObj=await collection.findOne({_id:new ObjectId(id)});
      return expensesObj;
    }catch(err){
      console.log(err);
      return "somethng is wrong";
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    
    const {minAmount,maxAmount,isRecurring}=criteria;
    const filter={};
    if(minAmount){
      filter.amount={$gte:Number(minAmount)}
    }

    if(maxAmount){
      filter.amount={...filter.amount,$lte:Number(maxAmount)}
    }

    if(isRecurring){
      filter.isRecurring=Boolean(isRecurring) && isRecurring === "true";
    }

    // console.log(filter);

    try{
      const db=getDB();
    const collection=db.collection(this.collectionName);
      const expensesObj=await collection.find(filter).toArray();
      return expensesObj;
    }catch(err){
      console.log(err);
      return "somethng is wrong";
    }
  }
}

export default ExpenseRepository;
