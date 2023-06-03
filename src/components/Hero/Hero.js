import './Hero.css';
import React from 'react';
import HeroImg from '../../assets/images/hero-img.jpg';

export default function Hero() {
  return (
    <div className='hero__header'>
        <img className='hero__img' src={HeroImg} alt="hero img" />
    </div>
  )
}
