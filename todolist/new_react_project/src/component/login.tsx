import styles from '@/styles/login.module.css'
import axios from 'axios';
import {getErrors, URL} from '@/assets/scripts/msg';
import { useState } from 'react';
function Login({navigate}:any){
    const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessmessage] = useState('')
    const [errors, setErrors] = useState<{[key:string]:string}>({})

    

    const register = async(e:any)=>{
        e.preventDefault();
        setErrors({});
        setSuccessmessage('')
        try{
            const result = await axios.post(`${URL}/register/create`,{firstname, lastname, username, password})
            setSuccessmessage('Account Created Successfuly')
        }
        catch(error:any){
            console.log(error)
            setErrors(getErrors(error))
            console.log('error',errors)
        }
    }

    
    return(
        <>
             <h2>Log in</h2>
                <form onSubmit={register}>
                    <div>
                        <label htmlFor="">firstName</label>
                        <input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} required placeholder='firstname' />
                        {errors.firstname && <p className={styles.errorMsg}>{errors.firstname}</p>}
                    </div>
                    <div>
                        <label htmlFor="">lastName</label>
                        <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} required placeholder='lastname' />
                        {errors.lastname && <p className={styles.errorMsg}>{errors.lastname}</p>}
                    </div>
                    <div>
                        <label htmlFor="" >username</label>
                        <input type="email" value={username} onChange={(e)=>{setUsername(e.target.value)}} required placeholder='username' />
                        {errors.username && <p className={styles.errorMsg}>{errors.username}</p>}
                    </div>

                    <div>
                        <label htmlFor="">password</label>
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder='password' />
                        {errors.password && <p className={styles.errorMsg}>{errors.password}</p>}
                    </div>
                    <div>
                        <input type="submit" value='Log in' />
                        {errors.error && <p className={styles.errMsg}>{errors?.error}</p>}
                        {successMessage && <p className={styles.successMsg}>{successMessage}</p>}
                    </div>
                </form>
                <span>You have already an account?<a onClick={navigate} className={styles.sub}> Sign in</a> </span>
        
        </>
    )
}

export default Login;