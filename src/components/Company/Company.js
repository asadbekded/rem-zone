import './Company.css';
import React from 'react';
import CompanyService from '../../assets/images/company-img.jpg';

export default function Company() {
  return (
    <div>
        <h2 className='company__title'>О КОМПАНИИ</h2>
        <div className='company__content'>
            <img className='company__img' src={CompanyService} alt="compony img" width={470} height={400} />
            <div className='company__box'>
                <p className='company__text'>
                    <strong className='company__str'>OOO “REM ZONE“</strong> начал свою деятельность с мая 2017.
                    <br />
                    <br />
                    Поставленная задача - завоевать рынок Узбекистана в сфере ремонта и обслуживания климатического и холодильного     оборудования, а так же по ремонту и установке стиральных машин - автомат.
                    <br />
                    <br />
                    Основными инструментами являются – профессионализм, пунктуальность, честность, добросовестность.
                </p>
                <p className='company__text'>За свой короткий срок существования компания <strong className='company__str'>OOO “REM ZONE“</strong> зарекомендовала себя как надежный и добросовестный партнер для многих компании</p>
            </div>
        </div>
    </div>
  )
}
