import './body.css'


function Body(props){
    const fruits = [
        {id:1, name:'banana'},
        {id:2, name:'orange'},
        {id:3, name:'strawbery'},
        {id:4, name:'apple'}
    ]


  const display = (list)=>list.map((item)=><li>{item.name}</li>)
 
    return (
         <div className="container body">
            {/* <div>
                <ul>
                    {display(fruits)}
                </ul>
            </div> */}
            <div className="home">
                <div className="leftside">
                    <h1 className='title'>Welcome to <span className='ourLogo'>{props.logo}  </span></h1>
                    <p className='description'>Discover a wide range of beautifully designed, customizable templates for all your projects. From business presentations to social media posts, our easy-to-use templates ensure your work stands out. Elevate your creativity with {props.logo} today!</p>
                    <button className='btn joinUs'>Join Us</button>
                </div>
                <div className="righside">
                    <img className='photo' src="https://img.freepik.com/premium-photo/sneakers-sports-running-bright-yellow-color-white-isolated-background_1097192-13944.jpg" alt="" />
                </div>
            </div>
            <div className="products">
                <h2 className='title'>Products</h2>
                <p className='description'>Discover our exceptional range of products at Storistore! Explore beautifully designed, customizable templates that cater to all your needs, from professional business presentations to eye-catching social media posts. </p>
                <div className="boxs">
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='productImg'>
                            <img src="https://img.eobuwie.cloud/eob_product_656w_656h(e/f/0/4/ef04e2653ea7a8fb61d8e94a45e8921eea80d1cb_0000208425551_05_rz.jpg,jpg)/papoutsia-nike-lebron-witness-v-cq9380-004-black-lagoon-pulse.jpg" alt="" />
                        </div>
                        <div className="productDesc">
                            <span className="productTitle">Nike Shoses</span>
                            <p className='productPrice'>23.99 $</p>
                            <button className='btn buy'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus">
                <h2 className='title'>Services</h2>
                <div class='services'>
                <div className='service'>
                    <img src="https://www.smartcustomizer.com//product-customizer.webp" alt="" />
                    <span >Product Customization</span>
                    <p className='description'>Allow clients to personalize products according to their preferences, such as adding text, choosing colors, or selecting specific features.</p>
                </div>
                <div className='service'>
                    <img src="https://www.infosearchbpo.com/images/customer-services.jpg" alt="" />
                    <span >Customer Support</span>
                    <p className='description'>Provide comprehensive customer support through live chat, email, or phone to assist with inquiries, orders, and issues.</p>
                </div>
                <div className='service'>
                    <img src="https://img.freepik.com/premium-vector/fast-shipping-logo_10250-3101.jpg" alt="" />
                    <span >Fast Shipping</span>
                    <p className='description'>Offer various shipping options, including expedited or same-day delivery, to meet clients' needs for quick and reliable service.</p>
                </div>
                <div className='service'>
                    <img src="https://images.assetsdelivery.com/compings_v2/blankstock/blankstock1904/blankstock190400672.jpg" alt="" />
                    <span >Return and Exchange Policy</span>
                    <p className='description'>Implement a flexible return and exchange policy to ensure customer satisfaction and trust.</p>
                </div>
                </div>
            </div>
         </div>



    )
    
}



export default Body;