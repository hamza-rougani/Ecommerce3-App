import React from 'react'
import SlidDown from './slidedownCate'
function dropdown() {
  return (
    <div className='dropdown alldown'>
      <ul id='ul2'>
        <li id='li1'><div className='img'><img src="https://cdn-icons-png.flaticon.com/128/8491/8491507.png" alt="" /></div><span>Women's Fashion</span><SlidDown/> </li>
        <li><div className='img'><img src="la-chemise.png" alt="" /></div><span>Men's Fashion</span></li>
        <li><div className='img'><img src="mobile.png" alt="" /></div><span>phones & Telecommunications</span></li>
        <li><div className='img'><img src="portable.png" alt="" /></div><span>Computer, Office</span></li>
       
      </ul>
    </div>
  )
}

export default dropdown
