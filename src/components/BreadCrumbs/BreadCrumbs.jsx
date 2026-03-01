import React from 'react';
import arrowicon from '../../assets/arrow_icon.png'
import './BreadCrumbs.css'
const BreadCrumbs = (props) => {
  return (
    <div className='breadcrumb'>
        Home
        <img src={arrowicon} alt="arrow-icon" height='10px'/>SHOP
        <img src={arrowicon} alt="arrow-icon" height='10px'/> {props.category}
        <img src={arrowicon} alt="arrow-icon" height='10px'/> {props.name}
        {/* <img src="arrow-icon.png" alt="" /> */}
    </div>
  )
}

export default BreadCrumbs