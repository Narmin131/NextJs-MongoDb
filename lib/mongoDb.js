import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Mongo Db");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDb;
