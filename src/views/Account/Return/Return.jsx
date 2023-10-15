import React from 'react'

function Return() {
  return (
    <div className='Return'>
       <div className='title'>
      <div className='img'><img src="product-return.png" alt="" /></div> Returns/refunds
       </div>
       <div className='content'>
        <ul>
            <li>In progress(0)</li>
            <li>Awaiting returns(0)</li>
            <li>Complete(0)</li>
        </ul>
        <div className='SearchRet'>
            <input type="text" placeholder='Order number'/>
            <button>Search</button>
        </div>
       </div>
       <div className='ListReturns'>
        <div className='titleI info'>
          <div className='child'>Information</div>
          <div className='child'>Status</div>
        </div>
        <ul>
          <li className='info'>
            <div className='information'>Refund_returns_list_not_order</div>
            <div className='status'></div>
          </li>
          <li></li>
        </ul>
       </div>
    </div>
  )
}

export default Return
