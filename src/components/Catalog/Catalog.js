import './Catalog.css';
import React from 'react';
import Repair from '../../assets/images/remont-1.jpg';
import RepairFridge from '../../assets/images/remont-2.jpg';
import RepairFridges from '../../assets/images/remont-3.jpg';
import RepairWash from '../../assets/images/remont-4.jpg';
import RepairWashs from '../../assets/images/remont-5.jpg';
import RepairJust from '../../assets/images/remont-6.jpg';

export default function Catalog() {
  return (
    <div className='catalog__content'>
        <h1 className='catalog__title'>НАШИ УСЛУГИ</h1>
        <p className='catalog__text'>Ремонт бытовой техники в сервисном центре «REMZONA» позволит получить качественные услуги за небольшую сумму при этом сэкономить время на починке.</p>

        <ul className='repair__list'>
            <li className='repair__item'>
                <img className='repair__img' src={Repair} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт чиллеров</h3>
                   <p className='repair__text'>Выполняем все виды ремонта установок в Ташкенте и Ташкентской области, предназначенных для охлаждения жидкости, – чиллеров.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>

            <li className='repair__item'>
                <img className='repair__img' src={RepairFridge} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт холодильного оборудования</h3>
                   <p className='repair__text'>Предлагаем профессиональный ремонт промышленного холодильного оборудованиялюбой    сложности.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>

            <li className='repair__item'>
                <img className='repair__img' src={RepairFridges} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт холодильников</h3>
                   <p className='repair__text'>Предлагаем профессиональный ремонт холодильного оборудования в Ташкенте и Ташкентской области на дому и любой сложности.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>

            <li className='repair__item'>
                <img className='repair__img' src={RepairWash} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт кондиционеров</h3>
                   <p className='repair__text'>Наши мастера имеют большой навык починки и технического сервиса кондиционеров в Узбекистане.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>

            <li className='repair__item'>
                <img className='repair__img' src={RepairJust} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт стиральных машин</h3>
                   <p className='repair__text'>Мы выполняем ремонт стиральных машин любой сложности. Выезд мастера в согласованное время.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>

            <li className='repair__item'>
                <img className='repair__img' src={RepairWashs} alt="repair img" width={330} height={150} />
                <div className='repair__box'>
                   <h3 className='repair__title'>Ремонт бытовой техники</h3>
                   <p className='repair__text'>Наш сервисный центр предлагает свои услуги по ремонту бытовой техники на дому в Узбекистане.</p>
                   <a className='repair__link' href="tel:+998946470008">Вызвать мастера</a>
                </div>
            </li>
        </ul>
    </div>
  )
}
