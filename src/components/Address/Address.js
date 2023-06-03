import React from 'react';
import './Address.css';

export default function Address() {
  return (
    <div>
        <h2 className='adres__title'>НАШ АДРЕС</h2>
        <iframe title="address remzone" className="address__frame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.9277831584893!2d69.3616209!3d41.2902478!3m2!1i1024!2i768!4f13.        1!3m3!1m2!1s0x38aef5ccce47d701%3A0x9ba0b1c166c50864!2sREMZONA!5e0!3m2!1sru!2s!4v1685774686404!5m2!1sru!2s" 
        style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>

    </div>
  )
}
