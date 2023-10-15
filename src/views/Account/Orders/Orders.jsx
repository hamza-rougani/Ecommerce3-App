import React, { useState } from 'react'
function Orders() {
  return (
    <div className='Orders'>
            <div className='OrderContai'>
        <div className='cases'>
            <div className='case'>
            <ul>
                <li id='all'>All</li>
                <li>Unpaid (0)</li>
                <li>Processing (0)</li>
                <li>Shipped (0)</li>
                <li>Processed</li>
            </ul>
            <button>Delete orders</button>
            </div>
            <div className='FilterO'>
              <div className='searchO'>
                <div className='select'>
                    <button id='Order'>Order <i class='bx bx-chevron-down'></i></button>
                    <div className='options'>
                        <ul>
                            <li>Processing</li>
                            <li>Shipped</li>
                            <li>Processed</li>
                        </ul>
                    </div>
                    </div>
                <input id='t' type="text" placeholder='Order Id,Product Name' />
                <button id='sear'><i class='bx bx-search-alt-2'></i></button>
              </div>
              <div className='select'>
                    <button id='Last'>All/Last Year <i class='bx bx-chevron-down'></i></button>
                    <div className='options'>
                        <ul>
                            <li>All/Last Year</li>
                            <li>Shipped</li>
                            <li>Processed</li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
        <div className='ListOrders'>
            <div className='OrderCart'>
           <div className='Expired'>
           <h4>Expired</h4>  
           <div className='OrderInfo'>
            <div className='IdOrder'>
            <span>Order date: Jan 21, 2023</span>
            <div className='Id'>Order ID: 8161597187727414 <button>Copy</button></div>
            </div>
            <button id='details'>Order details <i class='bx bx-chevron-right'></i></button>
           </div>
           </div>
           <div className='orderO'>
            <div className='img'><img src="http://localhost:5173/images/product_1.png" alt="" /></div>
            <div className='info'>
                <div className='titleOrder'>LccKaa 4K DisplayPort To HDMI-compatible Converter Cable 1080P DP to...</div>
                <div className='featurs'><b>black</b></div>
                <div className='price'><span>200.00 DH x 2</span> <span id="total"><b>Total: 400.00</b></span></div>
                <div className='btns'>
                    <button>Add to cart</button>
                    <button>Delete</button>
                </div>
            </div>
           </div>
            </div>
            <div className='OrderCart'>
           <div className='Expired'>
           <h4>Expired</h4>  
           <div className='OrderInfo'>
            <div className='IdOrder'>
            <span>Order date: Jan 21, 2023</span>
            <div className='Id'>Order ID: 8161597187727414 <button>Copy</button></div>
            </div>
            <button id='details'>Order details <i class='bx bx-chevron-right'></i></button>
           </div>
           </div>
           <div className='orderO'>
            <div className='img'><img src="http://localhost:5173/images/product_2.png" alt="" /></div>
            <div className='info'>
                <div className='titleOrder'>LccKaa 4K DisplayPort To HDMI-compatible Converter Cable 1080P DP to...</div>
                <div className='featurs'><b>black</b></div>
                <div className='price'><span>200.00 DH x 2</span> <span id="total"><b>Total: 400.00</b></span></div>
                <div className='btns'>
                    <button>Add to cart</button>
                    <button>Delete</button>
                </div>
            </div>
           </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Orders
