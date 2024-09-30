import mongoose from "mongoose";

const Todolist = mongoose.model('Todolist',{
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    priority:{
        type:String
    },
    deadline:{
        type:String
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

    
})


export default Todolist;