
import styles from '@/styles/login.module.css'
import { useEffect, useState } from 'react';
import { URL,getErrors } from '@/assets/scripts/msg';
import axios from 'axios';
import Window from './window';
function List({user}:any){
    type Task = { 
        _id:string,
        title:string,
        priority:string,
        category:string,
        description:string,
        status:string,
    }
    const [refresh, setRefresh] = useState(false)
    const [showBoxMsg, setShowBoxMsg] = useState(false)
    const [successMsg, setSuccessMsg] = useState(''); 
    const [errors, setError] = useState<{[key:string]:string}>({});
    const [task, setTask] = useState<Task[]>([])
    const [showModal, setShowModal] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState<Task>()
        useEffect(()=>{
        getTodolist()
        }, [task, refresh]);

        useEffect(()=>{
            if(successMsg || errors){
                setShowBoxMsg(true)
                const timer = setTimeout(() => {
                    setShowBoxMsg(false)
                }, 4000);
                return ()=> clearTimeout(timer)
            }
            else{
                setShowBoxMsg(false)
            }
        },[successMsg, errors.error])
    const getTodolist = async()=>{
        try{
            const response = await axios.get(`${URL}/todolist/get`,
                {
                    headers:{
                        'Authorization':user.token
                    }
                }
            )
            const data = response.data;
            if(data){
                setTask(data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const deleteTodolist = async(id:string)=>{
        try{
            const response = await axios.delete(`${URL}/todolist/delete/${id}`,
                {
                    headers:{
                        'Authorization':user.token
                    }
                }
            )
            setSuccessMsg('Deleted with success')
            setRefresh((prev)=> !prev)
        }
        catch(error){
            setError(getErrors(error))
        }
    }
    const showDetails = (todo:Task)=>{
        console.log(todo)
        setShowModal(true)
        setSelectedTodo(todo)
    }
    const hideDetails = (todo:Task)=>{
        setShowModal(false)
    }
    return (
        <>
            <div className={styles.boxs}>
             {task && task.map(todo => (
                 <div key={todo._id} className={styles.box}>
                 <div className={styles.infos}> 
                     <span><span className={styles.title}>Title : </span>{todo.title}</span>
                     <span><span className={styles.title}>Status : </span>{todo.status}</span>
                 </div>
                 <div className={styles.btns}>
                     <button onClick={()=>showDetails(todo)} className={styles.details}>Details</button>
                     <button onClick={()=>{deleteTodolist(todo._id)}} className={styles.delete}>Delete</button>
                 </div>
             </div>
             ))}
                
            </div>
            {showBoxMsg && successMsg && <p className={styles.successMsg}>{successMsg}</p>}
            {showBoxMsg && errors.error && <p className={styles.errMsg}>{errors.error}</p>}
            {showModal && <Window todo= {selectedTodo} onClose={hideDetails}/>}
        </>
    )
}

export default List;