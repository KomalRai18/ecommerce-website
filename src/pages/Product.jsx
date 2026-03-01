import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const productContext = useContext(ShopContext);
  const product = productContext.products.find((e)=> e.id == productId)
  // console.log(`product: ${product}`)
  return (
    <div className='products'>
      <BreadCrumbs  category={product.category} name={product.name}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product