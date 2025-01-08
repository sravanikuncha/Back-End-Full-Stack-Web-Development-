//No need to change code other than the last four methods
import { getClient, getDB } from '../../config/mongodb.js';

const collectionName = 'students';

class studentRepository {


    async addStudent(studentData) {
        const db = getDB();
        await db.collection(collectionName).insertOne(studentData);
    }

    async getAllStudents() {
        const db = getDB();
        const students = await db.collection(collectionName).find({}).toArray();
        return students;
    }


    //You need to implement methods below:

    async createIndexes() {
        const db=getDB();
        await db.collection(collectionName).createIndex({"name":1});
        await db.collection(collectionName).createIndex({"age":1,"grade":-1});
    }

    async getStudentsWithAverageScore() {
        const db=getDB();
        const result=await db.collection(collectionName).aggregate([
            {
                $unwind:"$assignments"
            },
            {
                $group:{
                   _id:{
                    _id:"$_id",
                    name:"$name"
                   },
                   name: { $first: "$name" },
                   averageScore:{$avg:"$assignments.score"}
                }
            },
            {
                $project:{
                    _id:0,
                    name:1,
                    averageScore:1
                }
            }
        ]).toArray();
        console.log(result);
        return result;
    }

    async getQualifiedStudentsCount() {
        const db=getDB();
        const result=await db.collection(collectionName).aggregate([
            {
                $unwind:"$assignments"
            },
            {
                $match: {
                    "assignments.title": "Math"
                }
            },
            {
                $project:{
                   "age":{$cond:{if:{$gt:["$age",9]}, then: "$age", else: null}},
                   "grade":{$cond:{if:{$lte:["$grade",'B']}, then: "$grade", else: null}},
                   "score":{$cond:{if:{$gte:["$assignments.score",90]}, then: "$assignments.score", else: null}}           
               }
            },
            {
                $match: {
                    "score": { $ne: null }
                }
            },
            {
                $count:"age"
            }
        ]).toArray();
        return result.length!=0?result[0].age:0;
    }

    getGrade(point){
        switch(point){
            case (point>=90):
                return 'A';
            case (point>=80):
                return 'B';
            case  (point>=70):
                return 'C';
            case (point>=60):
                return 'D';
            default:
                return 'F';
        }
    }


    async updateStudentGrade(id,extraCreditPoints) {
        const db=getDB();
        const client=getClient();
        const session= client.startSession();
        try{
            session.startTransaction();
            const result=await db.collection(collectionName).findOne({_id:id});
            const currentScore=result.assignments[0].score;
            await db.collection(collectionName).updateOne(
                  { _id: id },{ $set: { "assignments.$[index].score": currentScore+extraCreditPoints } },{ arrayFilters: [{ "index.title": "Math" }] });
            
            const grade=this.getGrade(currentScore);
            await db.collection(collectionName).updateOne({_id:id},{$set:{"grade":grade}},{session});

            session.commitTransaction();
            session.endSession();
            return;
        }
        catch(err){
            console.log(err);
            await session.abortTransaction();
            session.endSession();
        }
    }
};

export default studentRepository;
