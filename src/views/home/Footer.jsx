import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
       <div className='containerF'>
        <div className='subscribe'>
            <div className='part1'>
                <div className='h1'>Newsletter</div>
                <p>Subscribe to our newsletter and get 20% off your first purchas</p>
            </div>
            <div className='part2'>
                <input type="text" placeholder='Your email' id="email"/>
                <button id="sub">SUBSCRIBE</button>
            </div>
        </div>
        <div className='icons'>
            <div className='content'>
                <ul id='listOp'>
                    <li>Contact us</li>
                    <li>blog</li>
                    <li>about</li>
                </ul>
                <ul>
                    <li><i class='bx bxl-facebook' ></i></li>
                    <li><i class='bx bxl-linkedin' ></i></li>
                    <li><i class='bx bxl-github'></i></li>
                    <li><i class='bx bxl-twitter'></i></li>
                </ul>
            </div>
            <div className='copyright'>© Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus consectetur tempore ipsam illum .</div>
        </div>
       </div>
    </div>
  )
}

export default Footer
