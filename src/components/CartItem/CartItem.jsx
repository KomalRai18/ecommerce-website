import React from 'react'
import './CartItem.css'
import addItemIcon from '../../assets/circle.png'
import removeItemIcon from '../../assets/minus-button.png'
import trashIcon from '../../assets/bin.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
  const {removeItemFromCart, cartItems} = useContext(ShopContext)
  return (
    <div className='cartItems'>
     <div className='cart-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
     </div>
    <hr/>
    {cartItems.map((item, index)=>{
      return <div key={index}>
        <div className='cart-format cart-format-main'>
          <img src={item.image} alt="item-img" height='100px'/>
          <p>{item.name}</p>
          <p>{item.new_price}</p>
          <button className='cart-item-quantity'>
            {item.quantity}
          </button>
          <p>{item.new_price * item.quantity}</p>
          <img src={trashIcon} alt="trash-icon" height='20px'onClick={()=> removeItemFromCart(item.id)} className='cart-remove-icon'/>
          </div>
      </div>
    })}
    <hr />
    <div className='cart-items-down'>
      <div className='cart-total'>
        <h1>Cart Total</h1>
        <div >
          <div className='amount-description'>
            <p>Subtotal</p>
            <p>${cartItems.reduce((acc, curr)=> acc + curr.quantity * curr.new_price, 0)}</p>
          </div>
          <hr />
          <div className='amount-description'>
            <p>Shipping Fee</p>
            <p>${10}</p>
          </div>
          <hr />
          <div className='amount-description'>
            <p>Total</p>
            <p>${cartItems.reduce((acc, item)=> acc + item.new_price * item.quantity , 10)}</p>
          </div>

        </div>
        <button>Proceed To Checkout</button>
      </div>
      <div className='cart-promo-code'>
        <p>If you have promocode, Enter it here</p>
        <div className='promo-code'>
          <input type="text" placeholder='Promo Code'/>
          <button>Enter</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem