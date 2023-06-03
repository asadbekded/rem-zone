import './Home.css';
import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Catalog from '../../components/Catalog/Catalog';
import Company from '../../components/Company/Company';
import Address from '../../components/Address/Address';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
    <header className='site__header'>
        <div className='container'>
            <Header/>
        </div>
    </header>
    
    <main>
        <Hero/>
        <div className='container'>
          <Catalog/>
          <Company/>
          <Address/>
        </div>   
    </main>

    <footer className='site__footer'>
      <div className='container'>
        <Footer/>
      </div>
    </footer>
    </>
  )
}
