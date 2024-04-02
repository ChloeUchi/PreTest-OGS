import React from 'react'
import VisaImg from './visa-svgrepo-com.png'
import GolfLeaf from './gold-leaf.png'

function VisaCard() {
  return (
    <div className='p-[1em] m-15px text-white bg-gradient-to-b from-[#415981] to-[#274376] border rounded-md'>
        <img className='pl-[5px] w-[3.5em]' src={VisaImg} alt="" />
        <p className='pr-[3.5em] text-end text-[#AAFF00] text-xs'>Available Balance</p>
        <div className='flex justify-between'>
            <img className='ml-[13px] w-[35px] ' src={GolfLeaf} alt="" />
            <h1 className='pr-[1.5em] text-2xl'>$ 7,392.00</h1>
        </div><br />
        <h1 className='text-[#8a9ebf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
        <br />
        <div className='flex justify-between text-xs text-[#dedede]'>
        <p>EXPIRE &#9656; 02/22 </p>
        <p>CVC CODE &#9656; 230</p>
        </div>
        
    </div>
  )
}

export default VisaCard