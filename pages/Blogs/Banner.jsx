import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Discount on</h4>
        <h1>Culture And Heritage</h1>
        <p>"Journey Through Style: Where Every Piece Tells a Cultural Tale." 
           Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.</p>
        <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
      </div>
      <div className='header__image'>
        <img src={bannerImg} alt="Banner image " />
      </div>
    </div>
  )
}

export default Banner
