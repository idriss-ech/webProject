import './footer.css'

function Footer(props){
    return (

      <div className="container footer">
        <div className='logo'>
            {props.logo}
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <a href="">Contact us</a>
                </li>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Terms</a>
                </li>
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Agences</a>
                </li>
            </ul>
        </div>
      </div>
    )
}


export default Footer