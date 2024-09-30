import './header.css'
function Header(){
    return (
        <div className=' header'>
            <div className='logo'>
                StoriStore
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                </ul>
            </div>
            <div className="connexion">
                <button className="btn login">Log in</button>
                <button className="btn signin">Sign in</button>
            </div>
        </div>
    )
}

export default Header;