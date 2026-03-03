import React from 'react'
import './RelatedProducts.css';
import Item from '../Item/Item';
import data_product from '../../assets/data.js'
const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1>Recommended Products</h1>
        <hr/>
        <div className='display-related-products'>
            {data_product.map((data, index)=>{
                return <Item key={index} image={data.image} id={data.id} category={data.category} old_price={data.old_price} new_price={data.new_price} name={data.new_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts