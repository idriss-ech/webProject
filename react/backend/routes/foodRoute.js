import express from "express";
import {
  addFood,
  allFoods,
  deleteFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/all", allFoods);
foodRouter.delete("/delete/:_id", deleteFood);
export default foodRouter;
