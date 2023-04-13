import React from 'react'
import '../index.css'
import About from './About';
import Alarm from './Alarm';
import Clock from "./Clock";
import Contact from './Contact';

function Home() {

  return (
   < div className=''id='home'>

   <div className='m-4'> 
          <Clock/>
          
    </div>
    <div className='m-4' style={{border:'0'}} >
          <Alarm/>
    </div> 
   <div className='m-4'>
      <About/>
   </div>
   <div className='m-x-9'>
      <Contact/>
   </div>
     </div>
  )
}

export default Home
