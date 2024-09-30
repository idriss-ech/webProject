import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose
    .connect(
      "mongodb+srv://inscrag:zzYzs8FdL2PkS7@cluster0.zniiv.mongodb.net/tomato"
    )
    .then(() => {
      console.log("Connect to database");
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};
export default connectToDatabase;
