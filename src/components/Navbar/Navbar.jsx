import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import webIcon from '../../assets/social.png'
import shoppingCart from '../../assets/shopping-cart.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const {cartCount} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={webIcon} alt="logo"  height='50px'/>
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
            <Link to='/cart'><img src={shoppingCart} alt="shopping-cart" height="40px"/></Link>
            <p className="cart-count">{cartCount}</p>
        </div>
    </div>
  )
}

export default Navbar