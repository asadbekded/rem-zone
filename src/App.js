import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Error from './pages/Error/Error';

function App() {

  const [backButton, setBackButton] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if(window.scrollY > 700){
              setBackButton(true)
          }else{
              setBackButton(false)
          }
      })
  }, [setBackButton])

  const scrollUp = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
      </Routes>

      {
        backButton && (
            <button className='btn__top' onClick={scrollUp}>
              <IoIosArrowUp color='#fff' size={30}/>
            </button>
        )
      }
    </>
  );
}

export default App;
