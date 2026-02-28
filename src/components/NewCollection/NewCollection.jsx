import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'
import './NewCollection.css'
const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className='collection-items'>
        {new_collections.map((collection,i)=>{
            return <Item key={i} id={collection.id} image={collection.image} name={collection.name} new_price={collection.new_price}/>
        })}
        </div>
    </div>
  )
}

export default NewCollection