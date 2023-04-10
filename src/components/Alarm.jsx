import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go';
import {hour1,minutes1} from './Clock';

function Alarm() {

  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);

  function setAlarm() {
      // if(hr===hour1 && min===minutes1){
      //   console.log(hr+" "+min);
      // }
      
      console.log(hr);
      console.log(hour1);
  }

  const setTime=(props)=>{
      setHr(props.target.value.substr(0,2));
      setMin(props.target.value.substr(3,5));
  }

  return (
    <div className='m-x-5'>
      <h1 className='text-5xl text-sky-600 '>Alarm</h1>
      <div className='sign m-9'>
        <GoPlus className="icon" size="30px" color='green' />
      </div>
      <div>
        <input type="time" name="" id="time" onChange={setTime} className='text-4xl' />
        <input type="submit" value="Set" className='text-2xl m-x-4' onClick={setAlarm} />
      </div>
    </div>
  )
}

export default Alarm
