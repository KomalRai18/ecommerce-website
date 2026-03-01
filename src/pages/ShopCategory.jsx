import React, { useContext } from 'react'
import '../CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';
const ShopCategory = (props) => {
  const shopContext = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="banner" className='shop-banner'/>
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-2 </span> out of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src='dropdown-icon.png' alt="dropdown"/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {shopContext.products.map((product, i)=>{
          if(product.category === props.category) {
            return <Item key={i} image={product.image} id={product.id} new_price={product.new_price} old_price={product.old_price} name={product.name}/>
          }
        })}
      </div>
      <div className='
      '>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory