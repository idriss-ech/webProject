'use client'
import { useEffect, useState } from "react";
import List from "@/component/List";
import Add from "@/component/add";
import logo from "../../assets/logo.png";
import Image from "next/image";
import styles from './page.module.css'

function About(){
   const [userData, setUserData] = useState<{[key:string]:string}>();
   const [activeComponent, setActiveComponent] = useState('List')
   const renderComponent = ()=>{
      switch(activeComponent){
         case "List":
            return <List user = {userData}/>
         case "Add":
               return <Add  user = {userData} />
         default:
            return <Add user = {userData} />
      }
   }
   useEffect(()=>{
       const response = localStorage.getItem('userData')
        if(response){
         setUserData(JSON.parse(response))
        }
   },[])
   const logout = ()=>{
      console.log('logout')
         localStorage.removeItem('userData')
         window.location.href = '/'
   }
   return(
      <div className={styles.container}>
         <nav>
            <div>
               <Image src={logo} width={38} alt="" />
               <h1>To Do List</h1>
            </div>
            <div>
               <button onClick={()=>logout()}>Log Out</button>
               <span>J</span>
            </div>
         </nav>
         <main>
               {userData && <p>Welcome, {userData.firstname} {userData.lastname}</p>}
            <section className={styles.section1}>
               <div>
                  <h2>Manage your to do list</h2>
               </div>
               <div>
                  <button onClick={()=>{setActiveComponent('Add')}}>Add</button>
                  <button onClick={()=>{setActiveComponent('List')}}>List</button>
               </div>
               
            </section>
            <section className={styles.section2}>
               {renderComponent()}
            </section>
         </main>
            

     </div>
   )
  
}

export default About;