import mongoose from "mongoose";

const Connention = async () => {
  const url = process.env.DB_URL;
  try {
    await mongoose.connect(url, {});
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};

export default Connention;
