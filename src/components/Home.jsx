import React from 'react'
import '../index.css'
import Alarm from './Alarm';
import Clock from "./Clock";

function Home() {

  return (
   < div className=' grid grid-cols-2 divide-x'>

   <div className='m-4'> 
          <Clock/>
          
    </div>
    <div className='m-4'>
          <Alarm/>
    </div> 

     </div>
  )
}

export default Home
