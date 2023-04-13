import React from 'react'
import { useState } from 'react';
import Working from '../animations/working.json';
import Lottie from "lottie-react";

function Clock() {
  const[hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [AmOrPm, setAmOrPm] = useState(second)
  let d;
  
  setInterval(() => {
   d=new Date();
   let hours=d.getHours();
   let duration = hours >= 12 ? 'pm' : 'am';
   hours = (hours % 12) ;
   setHour(hours);
   setMinute(d.getMinutes());
   setSecond(d.getSeconds());
   setAmOrPm(duration);
  }, 1000);

  return (
    // <div className='lex justify-center items-center'>
    //   <h1 className='text-sky-600 text-5xl c-slate-500'>Digital Clock</h1>
    //   <h2 className='text-4xl m-9 dark:text-white' >{hour}:{minute}:{second}  {AmOrPm}</h2>
  
    // </div>
    <>
    <div className=''>
        <Lottie style={{ height: 500}} animationData={Working} className='' />
      </div>
      
    <div className='lex justify-center items-center'>
      
    <div className='text-center object-right' >
      <h1 className='text-sky-600 text-5xl c-slate-500'>Digital Clock</h1>
      <h2 className='text-4xl m-9 dark:text-white'>{hour}:{minute}:{second} {AmOrPm}</h2>
    </div>
  </div>
  </>
  )
}

export default Clock;

