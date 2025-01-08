import mongoose from "mongoose";

// const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
const baseUrl='mongodb+srv://kunchasravani:mgDhI1VO1OXej4ZE@cluster0.6a2fs.mongodb.net/';


export const connectToDb = async () => {
  try {
    // await mongoose.connect(`mongodb://${baseUrl}/book`, {
            await mongoose.connect(`${baseUrl}` , {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};


