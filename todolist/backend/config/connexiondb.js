import mongoose from "mongoose";

const connexiondb = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/todolist')
        console.log('connected to database')
    }
    catch(error){
        console.log(error)
    }
}
export default connexiondb