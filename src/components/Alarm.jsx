import React, { useState } from 'react'
// import { GoPlus } from 'react-icons/go';
import sound from './hogwards.mp3'

function Alarm() {

  let [hr, setHr] = useState(0);
  let [min, setMin] = useState(0);
  // const [clockHr, setClockHr] = useState(0);
  // const [clockMin, setClockMin] = useState(0);
  const [value, setValue] = useState('Set');

   const ringAlarm=()=>{
    let audio = new Audio(sound);
        audio.autoplay = true;
        audio.play();
   }

  function setAlarm() {
    setValue('Done');
    hr = parseInt(hr);
    min = parseInt(min);
    let d;
    let h1, m1;

   const check= setInterval(() => {
      d = new Date();
      m1 = d.getMinutes();
      h1 = d.getHours();
      if (hr === h1 && min === m1) {
        clearInterval(check);
        ringAlarm();
      }
    }, 1000);
  }



  const setTime = (props) => {
    setHr(props.target.value.substr(0, 2));
    setMin(props.target.value.substr(3, 5));



  }

  return (
    <div className='m-x-5'>
      <h1 className='text-5xl text-sky-600 '>Alarm</h1>
      {/* <div className='sign m-9'>
        <GoPlus className="icon" size="30px" color='green' />
      </div> */}
      <div className='m-9'>
        <input type="time" name="" id="time" onChange={setTime} className='text-4xl' />
        <input type="submit" value={value} className='text-2xl m-x-4' onClick={setAlarm} />
      </div>
    </div>
  )
}

export default Alarm
