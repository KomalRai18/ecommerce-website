import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="social.png" alt="logo"  height='50px'/>
            <p>Shopify</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu('home')}}><Link className={`nav-link ${menu=== 'home' ? 'active' : ''}`} to='/'>Home</Link> {menu==='home' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link className='nav-link' to='/women'>Women</Link> {menu==='women' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link className='nav-link' to='/men'>Men</Link> {menu==='men' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link className='nav-link' to='/kids'>Kids</Link> {menu==='kids' ? <hr/>:<></>}</li>
        </ul>
        <div className='login-cart'>
            <Link to='login'><button>Login</button></Link>
            <Link to='/cart'><img src="shopping-cart.png" alt="shopping-cart" height="40px"/></Link>
            <p className="cart-count">0</p>
        </div>
    </div>
  )
}

export default Navbar