import React from 'react'
import hamburgerNemu from './nemu-hamburger-white.png'
import menuHam from './nemu-hamburger.png'

function TopSection() {
  return (
    <div className='container'>
        <div className='flex justify-between'>
            <img src={hamburgerNemu} alt="" />
            <img src={menuHam} alt="" />
        </div>
    </div>
  )
}

export default TopSection