import React from 'react'
import Menuham from './nemu-hamburger.png'

function HeaderPage() {
  return (
    <div className='text-left font-sans m-[1.5em]'>
      <div className='flex justify-between'>
        <h3>All my accounts</h3>
        <img className='w-[20px]' src={Menuham} alt="#" />
      </div>
        
        <p className='text-[#d3d3d3]'>June 10, 2018</p>
    </div>
  )
}

export default HeaderPage