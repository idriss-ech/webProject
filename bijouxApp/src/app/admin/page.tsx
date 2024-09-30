

function Admin(){
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-amber-950 to-amber-800">
            <form className="bg-white rounded-lg px-6 py-4 w-3/4 md:w-2/3 ">
                <h1 className="mb-10 text-amber-800 font-bold text-4xl text-center">Log In</h1>
                <div className="relative border-2 rounded-md border-amber-600 my-8 py-2 transition ease-out duration-500 hover:border-amber-700 hover:text-amber-700">
                    <label className="absolute -top-4 left-2 bg-white px-2 text-amber-600 " htmlFor="username">Username</label>
                    <div className="flex items-center justify-between mx-1 ">
                            <input className="bg-gray-400 w-full px-3 py-1 rounded-md border-none outline-none bg-transparent placeholder-amber-700 placeholder-opacity-65" type="email" id="username" placeholder="enter your username" required />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-amber-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                    </div>
                    

                </div>
                <div className="relative border-2 rounded-md border-amber-600 my-8 py-2 transition ease-out duration-500 hover:border-amber-700 hover:text-amber-700">
                    <label className="absolute -top-4 left-2 bg-white px-2 text-amber-600 " htmlFor="username">Password</label>
                    <div className="flex items-center justify-between mx-1 ">
                            <input className="bg-gray-400 w-full px-3 py-1 rounded-md border-none outline-none bg-transparent placeholder-amber-700 placeholder-opacity-65" type="password" id="password" placeholder="enter your password" required />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-amber-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                    </div>
                    

                </div>
                <button className="bg-amber-700 w-full rounded-md py-3 text-white font-bold text-lg transition ease-out duration-500 hover:bg-amber-800" >Connexion</button>
            </form>
        </div>
    )
}

export default Admin;