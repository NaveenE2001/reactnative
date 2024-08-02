import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const mongourl = `mongodb://127.0.0.1:27017/Notes`;
    await mongoose.connect(mongourl);
    console.log("Connected successfully to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

export default connectToDB;
