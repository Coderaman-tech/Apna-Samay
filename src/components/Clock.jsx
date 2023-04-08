import React from 'react'
import { useState } from 'react';

function Time() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [AmOrPm, setAmOrPm] = useState(second)
 let d;

  setInterval(() => {
   d=new Date();
   let hours=d.getHours();
   let duration = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
   setHour(hours);
   setMinute(d.getMinutes());
   setSecond(d.getSeconds());
   setAmOrPm(duration);
  }, 1000);

  return (
    <div>
      <h1 className='text-sky-600 text-5xl c-slate-500'>Digital Clock</h1>
      <h2 className='text-4xl m-9' >{hour}:{minute}:{second}  {AmOrPm}</h2>

    </div>
  )
}

export default Time
