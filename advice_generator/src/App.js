import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ adviceSlip, setAdviceSlip ] = useState(null);

  async function fetchAdvice() {
    const result = await axios(
      'https://api.adviceslip.com/advice',
    );

    setAdviceSlip(result.data.slip);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      { adviceSlip &&
        <div className='absolute rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90%] w-96 p-8 pb-10 bg-dark-grayish-blue drop-shadow-xl'>
          <h3 className='text-center text-neon-green uppercase text-[0.6rem] tracking-[.35em]'>Advice #{adviceSlip.id}</h3>
          <p className='text-center text-lg mt-3 mb-5 text-light-cyan'>"{adviceSlip.advice}"</p>
          <img className='sm:hidden m-auto' src='./images/pattern-divider-desktop.svg' alt='divider'></img>
          <img className='lg:hidden m-auto' src='./images/pattern-divider-mobile.svg' alt='divider'></img>
          <div onClick={fetchAdvice} className='bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 absolute w-10 h-10 flex justify-center p-3 rounded-full bg-neon-green hover:drop-shadow-[0_0_10px_rgba(82,255,168,0.7)]'>
            <img src='./images/icon-dice.svg' alt='dice'></img>
          </div>
        </div> 
      }
    </div>
  );
}

export default App;
