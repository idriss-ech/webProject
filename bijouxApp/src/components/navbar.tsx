
function NavBar(){
    const showBlock = (item:string)=>{
        const block = document.querySelector(`.${item}`)
            if(block?.classList.contains('hidden')){
                block?.classList.remove('hidden');
                block?.classList.add('block');
            }
            else{
                block?.classList.remove('block');
                block?.classList.add('hidden');
            }

            switch(item){
                case 'menu':
                    document.querySelector('.search')?.classList.add('hidden');
                    document.querySelector('.bag')?.classList.add('hidden');
                    break;
                case 'search':
                    document.querySelector('.menu')?.classList.add('hidden');
                    document.querySelector('.bag')?.classList.add('hidden');
                    break;
                case 'bag':
                    document.querySelector('.search')?.classList.add('hidden');
                    document.querySelector('.menu')?.classList.add('hidden');
                    break;
            }
            
    }
    return(
        <nav className="relative flex justify-between items-center px-4 py-4">
                    <div>
                        <span className="font-extrabold text-amber-800 text-2xl">Bijoux</span>
                    </div>
                    <div className='hidden sm:block'>
                        <ul className='flex'>
                            <li className='mx-3 px-1 font-semibold text-amber-900 transition ease-in duration-500 hover:text-amber-700'>
                                <a href="" >Home</a>
                            </li>
                            <li className='mx-3 px-1 font-semibold text-amber-900 transition ease-in duration-500 hover:text-amber-700'>
                                <a href="" >Collections</a>
                            </li>
                            <li className='mx-3 px-1 font-semibold text-amber-900 transition ease-in duration-500 hover:text-amber-700'>
                                <a href="" >About us</a>
                            </li>
                        
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={()=>showBlock('search')} className='mx-2 text-amber-900 transition ease-in duration-500 hover:text-amber-700'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <button onClick={()=>showBlock('bag')} className='relative mx-2 text-amber-900 transition ease-in duration-500 hover:text-amber-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span className='absolute -top-2 -right-4 bg-green-500 rounded-full text-sm px-1 text-white'>0</span>
                        </button>
                            <div className='search hidden z-50 absolute py-2 bg-amber-900 bg-opacity-40 top-20 right-4 w-96 rounded-md'>
                                <div className='flex justify-between items-center mx-2 px-3 py-1'>
                                    <input type="text" placeholder='type to search ...' className='w-full mr-1 py-3 px-2 rounded-md border-none outline-none bg-transparent placeholder:text-amber-100'/>
                                    <button className='text-amber-800'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </button>
                                    

                                </div>
                            </div>
                            <div className='bag hidden absolute py-2 bg-amber-50 bg-opacity-70 top-20 right-4 w-96 rounded-md px-3 z-50'>
                                <h1 className='font-semibold text-2xl text-amber-900 border-b-2 border-amber-900'>
                                    Basket
                                </h1>
                                <div className='my-2'>
                                    products
                                </div>
                                <div className='flex flex-col '>
                                    <span className='my-2'> <span className='font-bold text-amber-900'>Total : </span> <span className="font-semibold">233 $</span></span>
                                    <button className='bg-amber-900 text-white py-2 rounded-md'>Order Now</button>
                                </div>
                            </div>
                    </div>
                    <div className='relative block  sm:hidden'>
                        <button onClick={()=>{showBlock('menu')}} className=' text-amber-900 transition ease-in duration-500 hover:text-amber-700' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div  className='menu z-50 hidden absolute top-16 right-4 py-5 bg-amber-900 bg-opacity-40 rounded-md'>
                            <ul className='flex flex-col items-center text-white'>
                                <li className='px-16 py-2 w-full text-center font-semibold transition ease-in duration-500 hover:bg-amber-700'>
                                    <a href="" >Home</a>
                                </li> 
                                <li className='px-16 py-2 w-full text-center  mx-3  font-semibold transition ease-in duration-500 hover:bg-amber-700'>
                                    <a href="" >Collections</a>
                                </li>
                                <li className='px-16 py-2 w-full text-center  mx-3  font-semibold transition ease-in duration-500 hover:bg-amber-700'>
                                    <a href="" >About us</a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </nav>
    )
}

export default NavBar;