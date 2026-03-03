import React, { useContext } from 'react'
import './ProductDisplay.css'
import fullstar from '../../assets/star-icon.png';
import halfstar from '../../assets/half-star-icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addItemToCart, totalCartCount} = useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className='product-display-left'>
          <div className='product-display-images'>
            <img src={product.image} alt="product-img" />
            <img src={product.image} alt="product-img" />
            <img src={product.image} alt="product-img" />
          </div>
          <img src={product.image}      alt="product-img" height='500px' className='focused-img'/>
        </div>
        <div className='product-display-right'>
          <h1>{product.name}</h1>
          <div className='rating'>
              <img src={fullstar} alt="fullstar-icon" height='30px'/>
              <img src={fullstar} alt="fullstar-icon" height='30px'/>
              <img src={fullstar} alt="fullstar-icon" height='30px'/>
              <img src={fullstar} alt="fullstar-icon" height='30px'/>
              <img src={halfstar} alt="halfstar-icon" height='25px' />
              <p>(130)</p>
          </div>
          <div className='description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi a vel, odit, eius eum eos quas rerum delectus corporis, magni quos culpa facere temporibus necessitatibus ex alias dolores. Vel.
          </div>
          <div className='pricing'>
            <p className='old-price'>${product.old_price}</p>
            <p className='new-price'>${product.new_price}</p>
          </div>
          <span>Select Size</span>
          <div className='select-size'>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
          <div className='add-to-cart'>
            <button onClick={()=>{
              addItemToCart(product)
              totalCartCount()
            }}>Add To Cart</button>
          </div>
          <div className='tags'>

          </div>
        </div>
    </div>
  )
}

export default ProductDisplay