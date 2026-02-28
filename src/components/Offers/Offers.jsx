import React from 'react'
import './Offers.css';

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Sellers</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src="exclu.webp" alt="exclusive-image"/>
        </div>
    </div>
  )
}

export default Offers