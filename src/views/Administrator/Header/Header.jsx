import React from 'react'

function Header() {
  return (
    <div className='HeaderAdmin'>
        <div className='part1'>
      <div className='logo'>
        <div className='img'><img src="http://localhost:5173/h.png" id='imgAll' alt="" /></div>
     <span id="name">Estevanico Management</span>
      </div>
      <div className='searchbarA'>
      <div className='searhI ic'>
      <i class='bx bx-search'></i>
      </div>
      </div>
      </div>
      <div className='part2'>
      <div className='icons'>
      <div className='msg ic'><i class='bx bx-message-rounded-dots' ></i></div>
      <div className='noti ic'><i class='bx bxs-bell' ></i></div>

      
      </div>
      <div className='user'>
        <div className='logouser'><img src="https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-arrives-at-the-go-campaigns-13th-annual-go-news-photo-1580914614.jpg?resize=2048:*" id='imgAll' alt="" /></div>
        <div className='infoUser'>
        <div className='name'>Hamza</div>
        <div className='status'>Administrator</div>
        </div>
        <i class='bx bx-chevron-down'></i>
      </div>
      </div>
    </div>
  )
}

export default Header
