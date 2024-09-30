
import React from 'react';
import axios from 'axios';
import {getErrors, URL} from '@/assets/scripts/msg';
import styles from '@/styles/login.module.css'
import { useState } from 'react';
 function Signin({navigate}:any){
    const [errors, setErrors] = useState<{[key:string]:string}>({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const connexion = async(e:any)=>{
        e.preventDefault();
        setErrors({})
        try{
            const result = await axios.post(`${URL}/register/connexion`,{username,password})
            localStorage.setItem('userData',JSON.stringify(result.data))
            window.location.href='profile'
        }
        catch(error){
            console.log(error)
            setErrors(getErrors(error))

        }
    }
    return(
        <>
              <h2>Sign in</h2>
                <form onSubmit={connexion}>
                    <div>
                    <label htmlFor="">username</label>
                    <input type="email" value={username} onChange={(e)=>{setUsername(e.target.value)}} required placeholder='username' />
                    </div>
                    <div>

                    <label htmlFor="">password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder='password' />
                    </div>
                    <div>
                    <input  type="submit"  value='Sign in' />
                    {errors.error && <p className={styles.errMsg}>{errors?.error}</p>}

                    </div>
                </form>
                <span>You don&apos;t have an account?<a onClick={navigate} className={styles.sub}> Login</a> </span>
        
        </>
    )
 }

 export default Signin;