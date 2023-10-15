import React from 'react'

function Help() {
  return (
    <div className='Help containerAccountS'>
    <div className='title'>
    <div className='img'><img src="support.png" alt="" /></div> Help Center
    </div>
    <div className='content'>
      <div className='searchDirect'>
        <div className='input'>
          <input type="text" placeholder='how can i help you ?'/>
          <button>search</button>
        </div>
      </div>
      <div className='object'>
      <div className='topics'>
      <h3>Topics</h3>
        <ul>
          <li>Awaiting Order Arrival <i class='bx bx-chevron-down'></i></li>
          <li>Refund <i class='bx bx-chevron-down'></i></li>
          <li>Account Management <i class='bx bx-chevron-down'></i></li>
          <li>Aftersales<i class='bx bx-chevron-down'></i></li>
          <li>Ordering & Payment <i class='bx bx-chevron-down'></i></li>
          <li>Promotion <i class='bx bx-chevron-down'></i></li>
        </ul>
      </div>
      <div className='questions'>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>I haven't received my order.</li>
          <li>What should I do?	How to check my refund ?</li>
          <li>My order was closed. What can I do ?</li>
          <li>How do I track my package ?</li>
          <li>How do I contact the seller ?</li>
          <li>	I cannot find order in my account.</li>
        </ul>
      </div>
      </div>
    </div>
 </div>
  )
}

export default Help
