import { useState } from "react";
function Products(){
    return(
        <div>
            <div className="flex justify-between items-end border-b-2 border-amber-700 border-opacity-80 pb-3 ">
                <h1 className="font-bold text-2xl text-amber-800 m-0">Products</h1>
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
                <div>
                    <form className="w-full py-1">
                        <Accordion/>
                    </form>
                </div>                 
            </div>




            
        </div>
    )
}

export default Products;



const Accordion = ()=>{
    return(
        <div className="w-full rounded-lg">
            <AccordionItem title="Product Information" >
                <div className="grid md:grid-cols-2 px-2 py-4">
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="productname" className="block text-sm  pl-1 text-amber-950 capitalize">Product Name</label>
                        <input type="text" id="productname" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" name="productname" placeholder="product name" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="category" className="block text-sm  pl-1 text-amber-950 capitalize"> Category</label>
                        <select name="category" id="category" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="necklace">necklace</option>
                            <option value="ring">ring</option>
                            <option value="bracelet">bracelet</option>
                            <option value="earrings">earrings</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="Description" className="block text-sm f pl-1 text-amber-950 capitalize">Description</label>
                        <input type="textarea" id="Description" className="w-full py-2 px-1 border-none outline-none rounded-md placeholder:text-sm" name="Description" placeholder="description" required/>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem title="Specifications">
                <div className="grid md:grid-cols-2 px-2 py-4">
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="materials" className="block text-sm  pl-1 text-amber-950 capitalize"> Materials</label>
                        <select name="materials" id="materials" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="gold">gold</option>
                            <option value="silver">silver</option>
                            <option value="platinum">platinum</option>
                            <option value="gemstones">gemstones</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="weight" className="block text-sm f pl-1 text-amber-950 capitalize">Weight</label>
                        <input type="number" id="weight" className="w-full py-2 px-1 border-none outline-none rounded-md placeholder:text-sm" name="weight" placeholder="weight" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="dimensions" className="block text-sm f pl-1 text-amber-950 capitalize">dimensions</label>
                        <input type="number" id="dimensions" className="w-full py-2 px-1 border-none outline-none rounded-md placeholder:text-sm" name="dimensions" placeholder="dimensions" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="color" className="block text-sm f pl-1 text-amber-950 capitalize">color</label>
                        <input type="color" id="color" className="w-full h-12 py-1 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="color" placeholder="color" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="gemstone" className="block text-sm  pl-1 text-amber-950 capitalize"> gemstone</label>
                        <select name="gemstone" id="gemstone" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="diamond">diamond</option>
                            <option value="ruby">ruby</option>
                            <option value="sapphire">sapphire</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="carat" className="block text-sm f pl-1 text-amber-950 capitalize">carat</label>
                        <input type="number" id="carat" className="w-full py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="carat" placeholder="carat" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="purity" className="block text-sm f pl-1 text-amber-950 capitalize">purity</label>
                        <input type="number" id="purity" className="w-full py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="purity" placeholder="purity" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="style" className="block text-sm  pl-1 text-amber-950 capitalize"> style</label>
                        <select name="style" id="style" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="classic">classic</option>
                            <option value="modern">modern</option>
                            <option value="vintage">vintage</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="gender" className="block text-sm  pl-1 text-amber-950 capitalize"> gender</label>
                        <select name="gender" id="gender" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="women">women</option>
                            <option value="men">men</option>
                            <option value="unisex">unisex</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="size" className="block text-sm f pl-1 text-amber-950 capitalize">size</label>
                        <input type="number" id="size" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="size" placeholder="size" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="countryOfOrigin" className="block text-sm  pl-1 text-amber-950 capitalize"> country of origin</label>
                        <select name="countryOfOrigin" id="countryOfOrigin" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="moroco" >Morocco</option>
                        </select>
                    </div>
                   
                </div>
            </AccordionItem>
            <AccordionItem title="Pricing and Availability">
                <div className="grid md:grid-cols-2 px-2 py-4">
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="price" className="block text-sm f pl-1 text-amber-950 capitalize">price</label>
                        <input type="number" id="price" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="price" placeholder="price" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="availability" className="block text-sm  pl-1 text-amber-950 capitalize"> availability</label>
                        <select name="availability" id="availability" className="w-full py-2 px-2 border-none outline-none rounded-md placeholder:text-sm" required>
                            <option value="in stock">in stock</option>
                            <option value="out of stock">out of stock</option>
                            <option value="pre-oreder">pre-oreder</option>
                        </select>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="sku" className="block text-sm f pl-1 text-amber-950 capitalize">SKU (Stock Keeping Unit)</label>
                        <input type="number" id="sku" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="sku" placeholder="sku" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="releaseDate" className="block text-sm f pl-1 text-amber-950 capitalize">Release Date</label>
                        <input type="date" id="releaseDate" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="releaseDate" placeholder="releaseDate" required/>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem title="Brand and Warranty">
                <div className="grid md:grid-cols-2 px-2 py-4">
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="brand" className="block text-sm f pl-1 text-amber-950 capitalize">brand</label>
                        <input type="text" id="brand" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="brand" placeholder="brand" required/>
                    </div>
                    
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="certificateOfAuthenticity" className="block text-sm f pl-1 text-amber-950 capitalize">Certificate of Authenticity</label>
                        <input type="text" id="certificateOfAuthenticity" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="certificateOfAuthenticity" placeholder="certificateOfAuthenticity" required/>
                    </div>
                    <div className=" rounded-md px-2 py-1 my-1">
                        <label htmlFor="warranty" className="block text-sm f pl-1 text-amber-950 capitalize">Warranty</label>
                        <input type="text" id="warranty" className="w-full  py-2 bg-white px-1 border-none outline-none rounded-md placeholder:text-sm" name="warranty" placeholder="warranty" required/>
                    </div>
                </div>
            </AccordionItem>
        </div>
    )
}

const AccordionItem = ({title, children}:any)=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="mb-2" >
            <button type="button" onClick={()=>setIsOpen(!isOpen)} className="flex justify-between px-2 py-2 rounded-lg w-full bg-amber-700 bg-opacity-15 font-semibold text-amber-900">
                <span>{title}</span>
                <span>
                    {isOpen? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </span>
            </button>
                {
                    isOpen && (
                        <div>
                            {children}
                        </div>
                    )
                }

        </div>
    )
}

