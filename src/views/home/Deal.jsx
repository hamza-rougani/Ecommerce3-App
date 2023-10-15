import React from 'react'

function Deal() {
  return (
    <div className='Deal'>
        
        <div className='image'>
            <img src="images/deal_ofthe_week.png" alt="" />
        </div>
        
        <div className='title'>
        <div className='cont'>
            <h1>Deal Of The Week</h1>
            <hr />
            <div className='time'>
                <div className='t days'><span>21</span><div>Day</div></div>
                <div className='t hours'><span>02</span><div>Hours</div></div>
                <div className='t minuts'><span>34</span><div>Mins</div></div>
                <div className='t second'><span>54</span><div>Sec</div></div>
                
               
            </div>
            <button>SHOP NOW</button>
        </div>
        </div>
    </div>
  )
}

export default Deal
