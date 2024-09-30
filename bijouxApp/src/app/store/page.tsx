'use client'
import './page.css'
import col1 from '../../assets/bj2.jpg'
import col2 from '../../assets/bj1.jpeg'
import col3 from '../../assets/bj3.jpeg'
import col4 from '../../assets/bj4.jpeg'
import pr1 from '../../assets/bj5.jpeg'
import pr2 from '../../assets/bj10.jpeg'
import pr3 from '../../assets/bj7.jpeg'
import pr4 from '../../assets/bj9.jpeg'
import bs1 from '../../assets/bj12.jpeg'
import bs2 from '../../assets/bj13.jpeg'
import bs3 from '../../assets/bj19.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
function Store() {
  
     

    return (
        <div>
            <div className="header">
                <NavBar/>
                <section className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-900 bg-opacity-65 text-white px-8 py-6 rounded-sm w-5/6">
                           <h1 className="text-4xl text-center font-bold mb-6">Welcome to BIJOUX Store</h1>
                            <p className="text-center">Discover the beauty and elegance of Bijoux. Our exquisite jewelry collection is crafted to perfection, blending timeless designs with contemporary style. Explore our latest pieces and find your next treasure today.</p>
                            <Link href="/store/product" className="mt-8 text-center bg-gray-200 w-80 py-3 text-amber-900 font-bold transition duration-500 ease-in hover:bg-amber-800 hover:bg-opacity-75 hover:text-white ">Shop Now</Link>
                </section>
            </div>

            <div className='flex flex-col justify-center items-center py-8 px-8 bg-amber-100 bg-opacity-35'>
                <h1 className="font-bold text-4xl text-amber-900 text-center ">Collections</h1>
                <p className='text-amber-900 text-opacity-90 font-light text-center py-3'>Explore our stunning collections, each thoughtfully curated to bring you the finest in jewelry. From elegant earrings to exquisite necklaces, find the perfect piece to elevate your style.</p>
                <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
                    <div className="box relative w-60 h-70  rounded-lg overflow-hidden drop-shadow-md  ">
                        <Image className="collectionImg  transition ease-in-out duration-300 w-full h-full  object-cover" src={col1}   alt="" />
                        <button className="collectionName absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center bg-trasparent text-transparent w-full h-full hover:cursor-pointer transition ease-in-out duration-300 hover:bg-amber-900 hover:bg-opacity-50 hover:text-white uppercase  ">Pendentif</button>
                    </div>
                    <div className="box relative w-60 h-70 rounded-lg overflow-hidden drop-shadow-md ">
                        <Image className="collectionImg  transition ease-in-out duration-300 w-full h-full"  src={col2}   alt="" />
                        <button className="collectionName absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center bg-trasparent text-transparent w-full h-full hover:cursor-pointer transition ease-in-out duration-300 hover:bg-amber-900 hover:bg-opacity-50 hover:text-white uppercase  ">Pendentif</button>
                    </div>
                    <div className="box relative w-60 h-70 rounded-lg overflow-hidden drop-shadow-md ">
                        <Image className="collectionImg  transition ease-in-out duration-300 h-full w-full" src={col3}   alt="" />
                        <button className="collectionName absolute flex  flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center bg-trasparent text-transparent w-full h-full hover:cursor-pointer transition ease-in-out duration-300 hover:bg-amber-900 hover:bg-opacity-50 hover:text-white uppercase  ">Pendentif
                        </button>
                    </div>
                    <div className="box relative w-60 h-70 rounded-lg overflow-hidden drop-shadow-md ">
                        <Image className="collectionImg  transition ease-in-out duration-300 w-full h-full" src={col4}   alt="" />
                        <button className="collectionName absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center bg-trasparent text-transparent w-full h-full hover:cursor-pointer transition ease-in-out duration-300 hover:bg-amber-900 hover:bg-opacity-50 hover:text-white uppercase  ">Pendentif</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center 
            r px-3 py-10 bg-amber-200 bg-opacity-35'>
                <h1 className="font-bold text-4xl text-amber-700 text-center ">New Arrivals</h1>
                <p className='text-amber-700 text-opacity-70 font-light text-center py-3'>Discover the latest additions to our store. Our New Arrivals collection features the freshest designs, perfect for updating your jewelry box with the newest trends and styles.</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6  mr-3'>
                <div className="prBox relative bg-white flex flex-col items-center rounded-lg overflow-hidden w-60  transition ease-in-out duration-300  hover:scale-105 hover:cursor-pointer">
                    <Image src={pr1} className='w-full h-60 transition ease-in-out duration-300 hover:scale-105' alt="product" />
                    <div className='flex flex-col items-center mt-4'>
                        <span className='pt-1  font-bold text-xl uppercase'>Title</span>
                        <span className='font-light text-center text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur</span>
                        <span className="flex py-2 font-bold text-amber-700">
                            150 $
                        </span>
                    </div>
                    <button className='bg-amber-800 mt-1 w-full  py-2 text-white font-extrabold transition ease-in-out duration-300 hover:bg-amber-950 absolute bottom-0'>Buy Now</button>
                </div>
                <div className="prBox relative bg-white flex flex-col items-center rounded-lg overflow-hidden w-60  transition ease-in-out duration-300  hover:scale-105 hover:cursor-pointer">
                    <Image src={pr2} className='w-full h-60 transition ease-in-out duration-300 hover:scale-105' alt="product" />
                    <div className='flex flex-col items-center mt-4'>
                        <span className='pt-1  font-bold text-xl uppercase'>Title</span>
                        <span className='font-light text-center text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur</span>
                        <span className="flex py-2 font-bold text-amber-700">
                            150 $
                        </span>
                    </div>
                    <button className='bg-amber-800 mt-1 w-full  py-2 text-white font-extrabold transition ease-in-out duration-300 hover:bg-amber-950 absolute bottom-0'>Buy Now</button>
                </div>
                <div className="prBox relative bg-white flex flex-col items-center rounded-lg overflow-hidden w-60  transition ease-in-out duration-300  hover:scale-105 hover:cursor-pointer">
                    <Image src={pr3} className='w-full h-60 transition ease-in-out duration-300 hover:scale-105' alt="product" />
                    <div className='flex flex-col items-center mt-4'>
                        <span className='pt-1  font-bold text-xl uppercase'>Title</span>
                        <span className='font-light text-center text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur</span>
                        <span className="flex py-2 font-bold text-amber-700">
                            150 $
                        </span>
                    </div>
                    <button className='bg-amber-800 mt-1 w-full  py-2 text-white font-extrabold transition ease-in-out duration-300 hover:bg-amber-950 absolute bottom-0'>Buy Now</button>
                </div>
                <div className="prBox relative bg-white flex flex-col items-center rounded-lg overflow-hidden w-60  transition ease-in-out duration-300  hover:scale-105 hover:cursor-pointer">
                    <Image src={pr4} className='w-full h-60 transition ease-in-out duration-300 hover:scale-105' alt="product" />
                    <div className='flex flex-col items-center mt-4'>
                        <span className='pt-1  font-bold text-xl uppercase'>Title</span>
                        <span className='font-light text-center text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur</span>
                        <span className="flex py-2 font-bold text-amber-700">
                            150 $
                        </span>
                    </div>
                    <button className='bg-amber-800 mt-1 w-full  py-2 text-white font-extrabold transition ease-in-out duration-300 hover:bg-amber-950 absolute bottom-0'>Buy Now</button>
                </div>
                
                
            </div>
            </div>

            <div className='flex flex-col items-center 
            r px-3 py-10 bg-amber-50 bg-opacity-35'>
                <h1 className="font-bold text-4xl text-amber-600 text-center ">Best Sellers
                </h1>
                <p className='text-amber-600 text-opacity-70 font-light text-center py-3'>Explore our most popular pieces. The Best Sellers collection highlights our customers favorite jewelry items, combining timeless elegance with contemporary fashion.
                </p>

                <div className='mx-16 sm:mx-6'>
                    <div className='grid sm:grid-cols-3 gap-x-4 gap-y-8 my-6 bg-amber-600 bg-opacity-10 p-6 rounded-lg'>
                        <Image src={bs1} className="rounded-lg" alt="" />
                        <div className="sm:col-span-2">
                            <h1 className='font-bold text-amber-900 text-3xl uppercase mb-3'>Product Name</h1>
                            <p className='font-light text-gray-800 text-opacity-65 text-md '>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis explicabo aliquid saepe cumque et dolorem voluptas vel assumenda, exercitationem eos eaque, quo molestiae! Minima architecto ut assumenda neque Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatibus tempore odit aliquid dicta molestias, perferendis ipsam? Eius cum quo saepe, earum distinctio, doloremque iure suscipit corrupti culpa magni nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus quasi quaerat est quo quam nemo, iure alias repudiandae quibusdam! magni laudantium? adipisicing elit. Architecto facilis reprehenderit, laudantium, temporibus et harum voluptatibus tempora maxime molestiae unde molestias, cumque perspiciatis! Sed, itaque fuga nostrum quasi earum ut?</p>
                            <button className='bg-amber-900 px-4 py-2 mt-3 text-white font-bold'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-3 gap-x-4 gap-y-8 my-6 bg-amber-600 bg-opacity-10 p-6 rounded-lg'>
                        <Image src={bs2} className="rounded-lg " alt="" />
                        <div className="sm:col-span-2">
                            <h1 className='font-bold text-amber-900 text-3xl uppercase mb-3'>Product Name</h1>
                            <p className='font-light text-gray-800 text-opacity-65 text-md '>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eos fugit aliquam quasi hic neque beatae, sapiente dolor voluptatibus inventore odit ut possimus iste facilis sequi commodi quis ullam in!
                            Ipsam, totam laboriosam tempore praesentium illo distinctio sit eligendi possimus laborum ex nihil aut itaque voluptates dolores veritatis accusantium iste sunt! Voluptatum labore voluptas odit expedita vel tempora, consequatur laboriosam?
                            Quidem veritatis molestiae vel nulla illum, voluptatem quasi eos libero maiores repellat delectus consequatur ipsum unde laborum, ad atque fugiat, quisquam fuga natus! Eum exercitationem iste, eveniet quibusdam at eius?
                            Commodi at ab quam et quia? Ullam obcaecati esse blanditiis necessitatibus magni, nesciunt eius quisquam, voluptatum provident rerum animi totam dignissimos modi, fum, qui eius eum., reprehenderit reiciendis.
                            Fuga quia error earum corrupti amet. Soluta consequuntur reprehenderit libero. Sapiente dolores corrupti voluptatum reprehenderit ea beatae recusandae minus, quo incidunt perferendis sequi molestiae adipisci non exercitationem quia tenetur modi?
                            Sed impedit odio cupiditate, ipsum vel ratione saepe similique nihil voluptatem consectetur nesciunt facilis. Doloremque, dignissimos perferendis! Repudiandae rerum eum odit officiis ex, assumenda iure laborum, beatae saepe recusandae provident. dolor sit, amet consectetur adipisicing elit. Architecto facilis reprehenderit, laudantium, temporibus et harum voluptatibus tempora maxime molestiae unde molestias, cumque perspiciatis! Sed, itaque fuga nostrum quasi earum ut?</p>
                            <button className='bg-amber-900 px-4 py-2 mt-3 text-white font-bold'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-3 gap-x-4 gap-y-8 my-6 bg-amber-600 bg-opacity-10 p-6 rounded-lg'>
                        <Image src={bs3} className="rounded-lg" alt="" />
                        <div className="sm:col-span-2">
                            <h1 className='font-bold text-amber-900 text-3xl uppercase mb-3'>Product Name</h1>
                            <p className='font-light text-gray-800 text-opacity-65 text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt aut cumque error, magni laudantium aspernatur iste repudiandae nisi at repellendus! Voluptatem recusandae fuga quidem, totam repudiandae velit voluptates? Mollitia.
                            Sapiente at, porro nihil nisi labore nobis omnis rerum delectus molestiae quos aliquid, voluptas eos reiciendis soluta alias voluptatibus voluptatem, debitis adipisci dolor ipsa laboriosam dicta rem ducimus accusantium. Doloremque.
                            Tenetur quidem dicta dolorum exercitationem! Qui natus incidunt, repellendus omnis exercitationem, quia quisquam cupiditate laborum laudantium officiis, voluptas dolores voluptates minima iure alias in doloribus rem ad autem ipsa mollitia.
                            Labore itaque, illum ullam nam eligendi qui iusto ad odit voluptate at recusandae. Quia, excepturi asperiores praesentium, totam est atque reiciendis blanditiis ad id, voluptas sapiente pariatur? Assumenda, enim voluptatibus.
                            Ad in officiis est minima fugiat, blanditiis reprehenderit, porro, suscipit iusto dolorem possimus incidunt maxime quae. Ex laudantium sunt sit! Cum enim rerum accusamus ad laudantium eum sint tempore qui.
                            Quis corporis maxime eaque at reiciendis possimus neque, totam doloribus provident, nemo iure eos non ratione libero. At corrupti excepturi hic modi doloremque enim reiciendis, nemo quia, ab, eligendi delectus!
                            Voluptas quo consequatur ex eius! Ab eaque perspiciatis reprehenderit maxime error nesciunt eos obcaecati dicta dolorum placeat tempora vel voluptates nihil repellat laudantium neque quam ipsum deleniti, illum maiores quos!
                            Expedita eum sed rerum placeat quidem quisquam dolorum iure officiis ratione, debitis perspiciatis assumenda, voluptatum inventore exercitationem? Similique fugit sunt ea dolore eveniet modi. Voluptas cumque magni at. Debitis, cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis reprehenderit, laudantium, temporibus et harum voluptatibus tempora maxime molestiae unde molestias, cumque perspiciatis! Sed, itaque fuga nostrum quasi earum ut?</p>
                            <button className='bg-amber-900 px-4 py-2 mt-3 text-white font-bold'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/> 
           
    </div>
    )
}

export default Store



