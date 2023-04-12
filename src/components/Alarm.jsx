import React, { useState } from 'react'
// import { GoPlus } from 'react-icons/go';


function Alarm() {

  let [hr, setHr] = useState(0);
  let [min, setMin] = useState(0);
  // const [clockHr, setClockHr] = useState(0);
  // const [clockMin, setClockMin] = useState(0);
  const [value, setValue] = useState('Set');

  function setAlarm() {
    setValue('Done');
    hr=parseInt(hr);
    min=parseInt(min);
    let d;
    let h1,m1;
    setInterval(() => {
      
     
      d=new Date();
      m1=d.getMinutes();
      h1=d.getHours();
      if(hr===h1 && min===m1){
        // let source= "hogwards.mp3";
        // var audio=new Audio();
        // audio.src=source;
        // audio.autoplay=true;
        // audio.play();
        console.log("Ringing");
      }
    }, 1000);
  }



  const setTime=(props)=>{
    // console.log(props.target.value.substr(3,5));
      setHr(props.target.value.substr(0,2));
      setMin(props.target.value.substr(3,5));
      
      var audio=new Audio("hogwards.mp3");
      audio.autoplay=true;
      console.log(audio);
      audio.play();
       
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
