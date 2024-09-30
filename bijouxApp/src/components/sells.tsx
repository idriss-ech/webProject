
function Sells(){
    return(
        <div>
            <div className="flex justify-between items-end border-b-2 border-amber-700 border-opacity-80 pb-3 ">
                <h1 className="font-bold text-2xl text-amber-800 m-0">Sells</h1>
                <div>
                    <button className="bg-amber-800 mr-1 text-white px-2 py-1 rounded-md transition ease-in-out duration-500 hover:bg-amber-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                    <button className="bg-amber-700 text-white px-2 py-1 rounded-md transition ease-in-out duration-500 hover:bg-amber-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className=" bg-amber-800 bg-opacity-5 rounded-md w-full h-full px-2 py-3 my-2">
            </div>
        </div>
    )
}

export default Sells;