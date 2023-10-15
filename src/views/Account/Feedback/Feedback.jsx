import React from 'react'

function Feedback() {
  return (
    <div className='Feedback containerAccountS'>
       <div className='title'>
       <div className='img'><img src="feedback.png" alt="" /></div> Feedback
       </div>
       <div className='content'>
       <div className='searchDirect'>
        <div className='input'>
          <input type="text" placeholder='order id'/>
          <button>search</button>
        </div>
      </div>
      <div className='result'>
        <ul>
          <li>Order</li>
          <li>Feedback</li>
          <li>Action</li>
        </ul>
      </div>
       Don't have any feedbacks
       </div>
    </div>
  )
}

export default Feedback
