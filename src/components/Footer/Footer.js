import './Footer.css';
import React from 'react';
import Logo from '../../assets/images/remzona-logo.jpg';
import { Link } from 'react-router-dom';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Youtube from '../../assets/images/youtube.svg';

export default function Footer() {
  return (
    <div className='footer__content'>
        <Link to={'/'}>
            <img src={Logo} alt="site logo" width={200} height={100} />
        </Link>

        <p className='footer__text'>REMZONA || Надежный ремонт бытовой техники</p>

        <div>
            <a className='footer__link' href="https://www.instagram.com/"><img className='footer__link-img' src={Instagram} alt="instagram logo" 
            width={40} height={40}/></a>
            <a className='footer__link' href="https://www.facebook.com/"><img className='footer__link-img' src={Facebook} alt="facebook logo" width={40}height={40}/></a>
            <a className='footer__link' href="https://www.youtube.com/"><img className='footer__link-img' src={Youtube} alt="youtube logo" width={40}height={40}/></a>
            <a className='footer__link' href="https://web.telegram.org/a/"><img className='footer__link-img' src={Telegram} alt="telegram logo" width={40} height={40}/></a>
        </div>
    </div>
  )
}
