import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food
const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  const filename = req.file.filename;
  const newfood = new foodModel({
    name: name,
    description: description,
    price: price,
    image: filename,
    category: category,
  });

  try {
    const savedFood = await newfood.save();
    res.status(200).json({ success: true, message: "Food Added", food: savedFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// list of all foods

const allFoods = async (req, res) => {
  try {
    const food_list = await foodModel.find({});
    if (food_list) {
      return res.status(200).json({ success: true, data: food_list });
    }
    return res.status(200).json({ success: false, message: "no item founded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// delete food item

const deleteFood = async (req, res) => {
  try {
    const _id = req.params._id;
    const food = await foodModel.findById({ _id });
    if (food) {
      fs.unlink(`uploads/${food.image}`, () => {});
      await foodModel.findByIdAndDelete({ _id });
      return res.status(200).json({ success: true, message: "food deleted" });
    }
    return res.status(404).json({ success: false, message: "food not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addFood, allFoods, deleteFood };
