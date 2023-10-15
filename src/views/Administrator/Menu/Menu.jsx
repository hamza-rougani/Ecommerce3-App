import React from 'react'

function Menu() {
  return (
    <div className='MenuAdmin'>
      <div className='titleM'>
        MENU
        <i class='bx bx-menu' ></i>
      </div>
      <ul id='ul'>
        <li id='li'>
          <div className='titleD'>
          <div className='dash'>
          <i class='bx bx-rocket'></i> Dashboard 
          </div>
          <i class='bx bx-chevron-down' ></i>
          </div>
        <ul id='sumiUl'>
          <li>Analytics</li>
          <li>Commerce</li>
          <li>Sales</li>
          <li>Minimal</li>
          <li>CRM</li>
        </ul>
        </li>
        <li id='li'>
          <div className='titleD'>
          <div className='dash'>
          <i class='bx bx-border-all'></i> Pages 
          </div>
          <i class='bx bx-chevron-down' ></i>
          </div>
        <ul id='sumiUl'>
          <li>Analytics</li>
          <li>Commerce</li>
          <li>Sales</li>
          <li>Minimal</li>
          <li>CRM</li>
        </ul>
        </li>
        <li id='li'>
          <div className='titleD'>
          <div className='dash'>
          <i class='bx bx-rocket'></i> Dashboard 
          </div>
          <i class='bx bx-chevron-down' ></i>
          </div>
        <ul id='sumiUl'>
          <li>Analytics</li>
          <li>Commerce</li>
          <li>Sales</li>
          <li>Minimal</li>
          <li>CRM</li>
        </ul>
        </li>
      </ul>
    </div>
  )
}

export default Menu
