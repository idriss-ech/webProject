import express from "express";
import cors from "cors";
import connectToDatabase from "./config/database.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
// app config
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) =>{
  res.status(500).json({success : false, message : 'Somthing went wrong'})
})

// connect to database
connectToDatabase();

// API's end points
app.use('/api/food', foodRouter)
app.use('/api/users', userRouter)
app.use('/images', express.static('uploads'));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
