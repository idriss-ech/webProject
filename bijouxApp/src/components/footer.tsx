

function Footer(){
    return(
        <div className="py-3 px-3 relative flex flex-col justify-center items-center bg-amber-800 bg-opacity-35">
            <div className="mb-6 flex flex-col items-center justify-center">
                    <div className="m-3">
                        <span className="font-extrabold text-amber-800 text-2xl">Bijoux</span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 ml-8 w-full '>
                        <div className="m-3 mr-8 text-center sm:text-left">
                            <h2 className="text-xl font-bold text-amber-950 mb-2">Contact Us</h2>
                            <ul className='flex flex-col font-light items-center sm:items-start'>
                                <li className='flex my-2'>
                                    <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    </span>
                                    <a href="">info@yourstore.com</a> 
                                </li>
                                <li className='flex my-2'>
                                    <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    </span>
                                    <span>
                                        +1 (234) 567-890</span>
                                </li>
                                <li className="flex my-2">
                                    <span className="mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    </span>
                                    <span>Address: 123 Jewelry Street, City, Country</span>
                                </li>
                            </ul>
                        </div>
            
                        <div className="m-3 text-center sm:text-left ">
                            <h2 className="text-xl font-bold text-amber-950 mb-2">Quick Links</h2>
                            <ul className='flex flex-col font-light items-center sm:items-start'>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Shop</a>
                                </li>
                                <li>
                                    <a href="">Collections</a>
                                </li>
                                <li>
                                    <a href="">About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="">Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                
                        <div className="m-3 text-center sm:text-left">
                            <h2 className="text-xl font-bold text-amber-950 mb-2">Customer Service</h2>
                            <ul className='flex flex-col font-light items-center sm:items-start'>
                                <li>
                                    <a href="">FAQs</a>
                                </li>
                                <li>
                                    <a href="">Shipping & Returns</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Terms & Conditions
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                
                        <div className="m-3 text-center sm:text-left">
                            <h2 className="text-xl font-bold text-amber-950 mb-2">Follow Us</h2>
                            <ul className='flex flex-col font-light items-center sm:items-start'>
                                <li>
                                    <span>
                                    </span>
                                    <a href="">Facebook</a>
                                </li>
                                <li>
                                    <span>

                                    </span>
                                    <a href="">Instagram</a>
                                </li>
                                <li>
                                    <span>

                                    </span>
                                    <a href="">Twitter</a>
                                </li>
                                <li>
                                    <span>

                                    </span>
                                    <a href="">Pinterest
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="absolute bottom-0 bg-amber-950 bg-opacity-75 py-1 text-center text-white  w-full">&copy;All right are riserved</div>
        </div>
    )
}
export default Footer;