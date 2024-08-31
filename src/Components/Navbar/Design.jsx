import React, { useState } from 'react';
import DarkMode from '../DarkMode/DarkMode';

const Design = () => {
  const [inputValue, setInputValue] = useState('');

  
  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  
  const handleReset = () => {
    setInputValue('');
  };

  const handleTotal = () => {
    try {
      const total = eval(inputValue);
      setInputValue(total.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div className='container bg-gray-600/50 gap-[20px] flex flex-col items-center justify-center h-[100vh] dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-gray-300 dark:bg-black dark:text-white text-black py-1 p-3'>
        <div className='flex items-center gap-[200px]'>
          <h1>calc</h1>
          <div className='flex items-center gap-5'>
            <div>
              <h1 className='text-xs'>THEME</h1>
            </div>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-300 dark:bg-black p-2 dark:text-black'>
        <input
          type="text"
          name="number"
          placeholder="0"
          value={inputValue}
          readOnly
          className='h-[8vh] w-[75vw] lg:h-[7vh] lg:w-[22vw] rounded-lg border-red-200 overflow-hidden p-2'
        />
      </div>

      <div className='bg-gray-300 dark:bg-black w-[80vw] h-[52vh] lg:w-[25vw] lg:h-[50vh] rounded-md p-5 dark:text-white shadow-lg'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <button onClick={() => handleButtonClick('7')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>7</button>
            <button onClick={() => handleButtonClick('8')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>8</button>
            <button onClick={() => handleButtonClick('9')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>9</button>
            <button onClick={() => setInputValue(inputValue.slice(0, -1))} className='bg-green-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-900 hover:scale-105 font-bold'>Del</button>
          </div>

          <div className='flex items-center justify-between'>
            <button onClick={() => handleButtonClick('4')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>4</button>
            <button onClick={() => handleButtonClick('5')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>5</button>
            <button onClick={() => handleButtonClick('6')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>6</button>
            <button onClick={() => handleButtonClick('+')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-900 hover:scale-105 font-bold'>+</button>
          </div>

          <div className='flex items-center justify-between'>
            <button onClick={() => handleButtonClick('1')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>1</button>
            <button onClick={() => handleButtonClick('2')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>2</button>
            <button onClick={() => handleButtonClick('3')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>3</button>
            <button onClick={() => handleButtonClick('-')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-900 hover:scale-105 font-bold'>-</button>
          </div>

          <div className='flex items-center justify-between'>
            <button onClick={() => handleButtonClick('.')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>.</button>
            <button onClick={() => handleButtonClick('0')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-500 hover:scale-105 font-bold'>0</button>
            <button onClick={() => handleButtonClick('/')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-900 hover:scale-105 font-bold'>/</button>
            <button onClick={() => handleButtonClick('*')} className='bg-gray-400 shadow-lg w-[15vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] text-center pt-0 lg:p-[3px] rounded dark:bg-green-900 hover:scale-105 font-bold'>*</button>
          </div>

          <div className='flex items-center justify-between'>
            <button onClick={handleReset} className='bg-green-950 w-[32vw] h-[8vh] lg:h-[6vh] lg:w-[10vw] shadow-lg rounded-md font-extrabold text-white hover:scale-105'>RESET</button>
            <button onClick={handleTotal} className='bg-red-900/100 w-[32vw] h-[8vh] lg:h-[6vh] lg:w-[10vw] shadow-lg rounded-md font-extrabold text-white hover:scale-105'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
