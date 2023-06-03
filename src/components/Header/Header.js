import './Header.css';
import React, { useState } from 'react';
import Remzona from '../../assets/images/remzona-logo.jpg';
import Instagram from '../../assets/images/instagram.svg';
import Telegram from '../../assets/images/telegram.svg';
import Facebook from '../../assets/images/facebook.svg';
import Youtube from '../../assets/images/youtube.svg';
import { Link } from 'react-router-dom';

export default function Header() {

    const [ openBtn, setOpenBtn ] = useState(false);
    console.log(openBtn);


  return (
    <div>
        <nav className= {openBtn ? 'open__nav' :'nav'}>
            <ul className='nav__list'>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Главная</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>O компании</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Каталог услуг</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Новости</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'} >Отзывы o нас</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Наш прайс-лист</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Наш адрес</Link>
                </li>
            </ul>
        </nav>
        <div className='burger__header'>
            <Link className='burger__logo' to={'/'}>
               <img src={Remzona} className='burger__img' alt='site logo' width={300} height={200} />
            </Link>

            <div onClick={() => setOpenBtn(!openBtn)} className={openBtn ? 'menu-btn active' : 'menu-btn'}>
               <span className="bar" />
               <span className="bar" />
               <span className="bar" />
             </div>

        </div>
        <div className='header'>
            <div className='header__link-box'>
                <a className='header__link' href="https://www.instagram.com/"><img className='header__link-img' src={Instagram} alt="instagram logo" width={40} height={40}/></a>
                <a className='header__link' href="https://www.facebook.com/">
                    <img className='header__link-img' src={Facebook} alt="facebook logo" width={40} height={40}/>
                </a>
                <a className='header__link' href="https://www.youtube.com/"><img className='header__link-img' src={Youtube} alt="youtube logo" width={40} height={40}/></a>
                <a className='header__link' href="https://web.telegram.org/a/"><img className='header__link-img' src={Telegram} alt="telegram logo" width={40} height={40}/></a>
            </div>
            <Link className='header__logo' to={'/'}>
               <img src={Remzona} className='header__img' alt='site logo' width={300} height={200} />
            </Link>
            <div className='header__phone-box'>
              <a className='header__phone' href="tel:+998959690008">+998 95 9690008</a>
            </div>
        </div>
    </div>
  )
}