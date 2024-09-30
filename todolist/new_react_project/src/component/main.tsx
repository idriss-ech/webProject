'use client'
import logo from '../assets/logo.png'
import styles from '@/styles/login.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Signin from './signin';
import Login from './login';
function Main
(){
    const [isSignin, setIsSignin]= useState<boolean>(true)
    const navigate = ():void => {
        setIsSignin(!isSignin);
    }
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Image src={logo} alt="" />
                <h1>Welcome in</h1>
                <h1 className={styles.logo}>To Do List</h1>
            </div>
            <div className={styles.rightSide}>
               {isSignin ? <Signin navigate={navigate} /> : <Login navigate={navigate} />}
            </div>
        </div>
    )
}

export default Main;