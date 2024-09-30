'use client'
import { useState } from "react";
import Dashboard from "@/components/dashboard";
import Products from "@/components/products";
import Orders from "@/components/orders";
import Settings from "@/components/settings";
import Sells from "@/components/sells";
import Reports from "@/components/reports";
function Profile(){
    const [comp, setComp] = useState('');
    const showComp = (comp:string)=>{
        switch(comp){
            case 'dashboard':
                return <Dashboard/>
            case 'products':
                return <Products/>
            case 'orders':
                return <Orders/>
            case 'sells':
                return <Sells/>
            case 'reports':
                return <Reports/>
            case 'settings':
                return <Settings/>
            default:
                return <Dashboard/>

        }

    }

    const showMenu = ()=>{
        const menu = document.querySelector('.menu')
            menu?.classList.toggle('hidden')
    }

    const sideBar = ()=>{
        const sidebar = document.querySelector('.sideBar')
            sidebar?.classList.toggle('w-96')
            sidebar?.classList.toggle('w-16')
            document.querySelectorAll('.sidebarItem').forEach(item=>{
                item.classList.toggle('hidden')
            })

        
    }
    return(
        <div className="w-screen h-screen flex">
            <div className="sideBar w-96  relative bg-amber-900 transition-all ease-in-out duration-300 bg-opacity-25  p-2">
               <div className="flex justify-between items-center mb-10">
                  <span className="pl-2 sidebarItem font-extrabold text-amber-800 text-2xl">
                    Bijoux
                  </span>
                  <button id="sidebarBtn" onClick={()=>sideBar()} className="text-amber-700 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
               </div>
               <div>
                    <ul>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md  text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('dashboard')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                    </svg>
                                </span>
                                <span  className="sidebarItem pl-2 ">Dashboard</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('products')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                </span>
                                <span className="sidebarItem pl-2 ">Products</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('orders')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                </span>
                                <span className="sidebarItem pl-2 ">Orders</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('sells')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                    </svg>
                                </span>
                                <span className="sidebarItem pl-2 ">Sells</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('reports')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </span>
                                <span className="sidebarItem pl-2 ">Reports</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-2 px-2 py-2  rounded-md text-amber-700 font-semibold transition ease-in-out duration-400 hover:bg-amber-700 hover:bg-opacity-40 hover:text-amber-900">
                            <a onClick={()=>setComp('settings')} className="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </span>
                                <span className="sidebarItem pl-2 ">Settings</span>
                            </a>
                        </li>
                        
                    </ul>
               </div>
               <div className="absolute left-2 right-2 bottom-3 flex items-center justify-between">
                <div className="flex">
                    <span className="bg-amber-900 text-white text-center flex justify-center items-center px-3  rounded-lg">JS</span>
                    <span className="pl-1 sidebarItem">
                        <span className="font-light text-amber-800 block text-md">John Smith</span>
                        <span className="text-gray-600 text-sm font-light">Admin</span>
                    </span>
                </div>
                <div className="relative">
                    <button onClick={()=>showMenu()} className="sidebarItem">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </span>
                    </button>
                    <div className="menu hidden absolute bg-amber-900 bg-opacity-15 bottom-3 left-12 w-36 rounded-lg overflow-hidden">
                        <ul>
                            <li className="w-full text-center text-amber-900 transition ease-in-out duration-300 hover:bg-amber-800 hover:bg-opacity-10 py-1">
                                <a href="">Profile</a>
                            </li>
                            <li className="w-full text-center text-amber-900 transition ease-in-out duration-300 hover:bg-amber-800 hover:bg-opacity-10 py-1">
                                <a href="">LogOut</a>
                            </li>
                           
                        </ul>
                    </div>
                </div> 
               </div>
            </div>

            <div className="bg-gray-100 w-full px-5 py-6 overflow-auto">
                {showComp(comp)}
            </div>
        </div>
    )
}


export default Profile;