import ExpenseRepository from "./expense.repository.js";

const expenseRepositoryObj=new ExpenseRepository();
export default class ExpenseModel {
  constructor(title, amount, date, isRecurring, tags) {
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.isRecurring = isRecurring;
    this.tags = tags;
  }

  static async addExpenseModel(newExpense){
    const {title,amount,date,isRecurring,tags}=newExpense;
    const newExpenseObj=new ExpenseModel(title,amount,date,isRecurring,tags);
    try{
      const expenseObj=await expenseRepositoryObj.addExpense(newExpenseObj);
      return expenseObj
    }catch(err){
      console.log(err);
      return "something is wrong";
    }
    
   
  }

  static async getAllExpenses(){
    try{
      const expensesObj=await expenseRepositoryObj.getAllExpenses();
      return expensesObj
    }catch(err){
      console.log(err);
      return "something is wrong";
    }
    
   
  }

  static async getOneExpense(id){
    try{
      const expensesObj=await expenseRepositoryObj.getOne(id);
      return expensesObj
    }catch(err){
      console.log(err);
      return "something is wrong";
    }
    
   
  }

  static async addTagModel(id,tag){
    try{
      const expensesObj=await expenseRepositoryObj.addTagToExpense(id,tag);
      return expensesObj
    }catch(err){
      console.log(err);
      return "something is wrong";
    }
  }

  static async filterExpense(input){
    try{
      const criteria=input;
      const expensesObj=await expenseRepositoryObj.filterExpenses(criteria);
      return expensesObj
    }catch(err){
      console.log(err);
      return "something is wrong";
    }
  }
}
