import './Header.css';
import React from 'react';
import Remzona from '../../assets/images/remzona-logo.jpg';
import Instagram from '../../assets/images/instagram.png';
import Telegram from '../../assets/images/telegram.png';
import Facebook from '../../assets/images/facebook.png';
import Youtube from '../../assets/images/youtube.png';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/'}>Главная</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'company'}>O компании</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/catalog'}>Каталог услуг</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/news'}>Новости</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/about'} >Отзывы o нас</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/price'}>Наш прайс-лист</Link>
                </li>
                <li className='nav__item' >
                    <Link className='nav__link' to={'/address'}>Наш адрес</Link>
                </li>
            </ul>
        </nav>
        <div className='header'>
            <div>
                <a className='header__link' href="https://www.instagram.com/"><img src={Instagram} alt="instagram logo" width={45} height={40}/></a>
                <a className='header__link' href="https://www.facebook.com/"><img src={Facebook} alt="facebook logo" width={40} height={40}/></a>
                <a className='header__link' href="https://www.youtube.com/"><img src={Youtube} alt="youtube logo" width={40} height={40}/></a>
                <a className='header__link' href="https://web.telegram.org/a/"><img src={Telegram} alt="telegram logo" width={40} height={40}/></a>
            </div>
            <Link to={'/'}>
               <img src={Remzona} alt='site logo' width={300} height={200} />
            </Link>
            <div className='header__phone-box'>
              <a className='header__phone' href="tel:+998959690008">+998 95 9690008</a>
            </div>
        </div>
    </div>
  )
}
