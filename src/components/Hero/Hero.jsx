import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Best Deals ! Best Prices!</h2>
            <div className='hand-icon'>
                <p>New</p>
                 <img src="hand_icon.png" alt="hand-icon" height='50px'/>
            </div>
            <p>Collections</p>
            <p>For EveryOne</p>
            <div className="latest-btn">
                <div>Latest Collection</div>
                <img src="arrow_icon.png" alt="arrow-icon" height='30px'/>
            </div>
        </div>
        <div className='hero-right'>
           <img src="men.webp" alt="hero-section-men" height='500px'/>
        </div>
    </div>
  )
}

export default Hero