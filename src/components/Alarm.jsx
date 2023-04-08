import React from 'react'
import { GrAdd } from 'react-icons/gr';

function Alarm() {
  return (
    <div>
      <h1 className='text-5xl text-sky-600 '>Alarm</h1>
      <h3 className=''> Lets go for a

        <GrAdd Close
          className="icon"
          size="50px"
          color="white" />

      </h3>
    </div>
  )
}

export default Alarm
