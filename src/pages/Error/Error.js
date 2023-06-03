import React from 'react';
import './Error.css'
import ErrorPage from '../../assets/images/error.png';

export default function Error() {
  return (
    <div>
        <img className='error__img' src={ErrorPage} alt="Error-flag" width={600} height={500} />
    </div>
  )
}
