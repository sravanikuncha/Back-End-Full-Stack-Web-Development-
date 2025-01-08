import { getDB } from "../../config/mongodb.js";
import BucketListRepository from "./bucketList.repository.js";

const bucketListRepositoryObj=new BucketListRepository();

export default class BucketListModel {
  constructor(title, description, dateAdded, targetDate, isCompleted) {
    this.title = title;
    this.description = description;
    this.dateAdded = dateAdded;
    this.targetDate = targetDate;
    this.isCompleted = isCompleted;
  }

  // Move the below methods to the repository file
  static async addBucketListItem(
    title,
    description,
    dateAdded,
    targetDate,
    isCompleted
  ) {

    const newItem = new BucketListModel(
      title,
      description,
      dateAdded,
      targetDate,
      isCompleted
    );
    await bucketListRepositoryObj.addBucketListItem(newItem);

    return newItem;
  }

  static async findOneBucketListItem(title) {
    
    const item=await bucketListRepositoryObj.findOneBucketListItem(title);
    return item;
  }
}
