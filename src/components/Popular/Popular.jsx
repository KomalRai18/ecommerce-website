import React from 'react'
import './Popular.css';
import all_product from '../../assets/all_products';
import data_product from '../../assets/data';
import Item from '../Item/Item';
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((product, i)=> {
                return <Item key={i} id={product.id} image= {product.image} name={product.name} new_price={product.new_price} old_price={product.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular