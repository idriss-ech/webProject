import { useEffect, useState } from 'react';
import styles from '@/styles/login.module.css'
import { getErrors, URL } from '@/assets/scripts/msg';
import axios from 'axios';
function Add({user}:any){
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('medium')
    const [deadline, setDeadline] = useState('')
    const [category, setCategory] = useState('personal')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('pending')
    const [errors, setErrors] = useState<{[key:string]:string}>({})
    const [successMessage, setSuccessError] = useState('')
    const [showMsgBox, setShowMsgBox] = useState(false)

    useEffect(()=>{
        if(successMessage || errors.error){
            setShowMsgBox(true)
           const timer =  setTimeout(() => {
                setShowMsgBox(false)
            }, 4000);
            return ()=> clearTimeout(timer)
        }
        else{
            setShowMsgBox(false)
        }
    },[successMessage , errors.error])

    const handleSubmit= async(e:any)=>{
        e.preventDefault()
        const createdAt = new Date().toISOString();
        try{
            const response = await axios.post(`${URL}/todolist/add`,
                {title, priority, deadline, category, description, status, createdAt},
                {
                    headers:{
                        'Authorization':user.token
                    }
                }
            )
            setSuccessError('Created Successfuly')
            
        }
        catch(error){
            console.log(error)
            setErrors(getErrors(error))
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.addForm}>
                <div>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" required/>
                    {errors.title && <p className={styles.errorMsg}> {errors.title} </p>}
                    <input type="date" value={deadline} onChange={(e)=>setDeadline(e.target.value)}  placeholder="deadline" required/>
                    {errors.deadline && <p className={styles.errorMsg}> {errors.deadline} </p>}
                    <textarea placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}  required/>
                    {errors.description && <p className={styles.errorMsg}> {errors.description} </p>}
                    
                </div>
                <div>
                    <select name="priority" value={priority} onChange={(e)=>setPriority(e.target.value)}  id="priority">
                        <option value="high" >High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    {errors.priority && <p className={styles.errorMsg}> {errors.priority} </p>}

                    <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}  id="category">
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="health">Health</option>
                        <option value="finance">Finance</option>
                    </select>
                    {errors.category && <p className={styles.errorMsg}> {errors.category} </p>}

                    <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)}  id="status">
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="on hold">On Hold</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    {errors.status && <p className={styles.errorMsg}> {errors.status} </p>}

                    <button type="submit">Add</button>
                    {showMsgBox && successMessage && <p className={styles.successMsg}>{successMessage}</p>}
                    {showMsgBox && errors.error && <p className={styles.errMsg}>{errors.error}</p>}
                </div>
            </form>
        </>
    )
}

export default Add; 