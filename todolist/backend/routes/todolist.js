
import express from 'express'
import auth from '../middleware/auth.js';
import {body, validationResult} from 'express-validator'
import Todolist from '../models/todolist.js';
const router = express.Router();

router.post('/add', auth,
    [
        body('title').isString().withMessage('title must be string').notEmpty().withMessage('title is required'),
        body('priority').optional().custom((value)=>{
            const valideValue = ['high', 'medium', 'low']
            if(!valideValue.includes(value)){
                throw new Error('Invalid priority value')
            }
            return true
        }),
        body('deadline').optional().isISO8601().withMessage('deadline must be a valid date string in ISO 08601')
        .custom((value)=>{
            const date = new Date()
            const deadline = new Date(value)
            if(deadline <= date){
                throw new Error('deadline must be after creation date')
            }
            return true
        }),
        body('category').optional().custom((value)=>{
            const categoryValue = ['personal', 'work', 'health', 'finance']
            if(!categoryValue.includes(value))
                throw new Error('Invalid category value')
            return true
        }),
        body('description').optional().isString().withMessage('description must be string'),
        body('status').optional().custom((value)=>{
            const statusValue = ['pending', 'in progress', 'completed', 'on hold', 'cancelled']
            if(!statusValue.includes(value))
                throw new Error('Invalid status value')
            return true
        }),
        body('createdAt').optional().isISO8601().withMessage('createdAt must be a valid date string in ISO 08601'),
        body('updatedAt').optional().isISO8601().withMessage('updatedAt must be a valid date string in ISO 08601')
    ]
    ,async (req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
        const {title, priority, deadline, category, description, status, createdAt, updatedAt} = req.body;  
        const newTodolist = new Todolist({userId:req.user.id, title, priority, deadline, category, description, status, createdAt}) 
        try{
            const savedTodolist = await newTodolist.save(); 
            res.status(200).json({message:'To Do List created successfuly'})
        }
        catch(error){
            console.log(error)
            res.status(400).json({message: 'error whene create todolist'})
        }
})

router.get('/get', auth, async(req, res)=>{
    try{
        const todolist = await Todolist.find({userId:req.user.id})
        res.status(200).json(todolist)
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:'error to find to do list'})
    }
})

router.delete('/delete/:id', auth, async(req,res)=>{
    try{
        const deleted = await Todolist.findByIdAndDelete({_id:req.params.id})
        if(!deleted)
            return res.status(404).json({message:'not found'})
        
        res.status(200).json({message:"todolist deleted successfuly"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'Error when deleting todolist'})
    }
})




export default router;