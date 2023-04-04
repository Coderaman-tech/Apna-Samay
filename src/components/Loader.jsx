import React from 'react'
import Loading from '../animations/loading.json';
import Lottie from "lottie-react";

function Loader() {
    return (
      <div className='bg-black' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Lottie style={{ height: 400 }} animationData={Loading} className='object-center object-cover' />
      </div>
    )
  }
  

export default Loader
