import React from 'react'
import Header from '../home/Header'
import Footer from "../home/Footer"
function Cart() {
  return (
    <div>
    <div className='containerCart'>
       
        <div className='contentCart'>
            <div className='contaiCart'>
            <div className='shoppingP'>
              <div className='shopping'>
            <div className='shop s1'>Shopping Cart</div>
            <div className='part2S'>
              <button id="bt">Delete</button>
            <div className='item'>3 Items</div>
               </div>
           
            </div>
            <div className='contentSh'>
              <div className='element1'><input type="checkbox" /> <label htmlFor="">Select all items</label></div>
            </div>
            </div>
            <div className='itemsCart'>
               <div className='item'>
                <div className='checkP'>
                  <input type="checkbox" />
                </div>
                <div className='menu'>
                <i class='bx bx-cart' ></i>
                <i class='bx bx-heart' ></i>
                <i class='bx bx-x'></i>
                
                </div>
                <div className='image'>
                  <div className='img'>
                    <img src="images/product_1.png" alt="" />
                  </div>
                </div>
                <div className='info'>
                  <div className='price'>MAD 100.00 DH</div>
                  <div className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ...</div>
                  <div className='detail'>Black</div>
                  <div className='quantity'>
                    <button>-</button>
                    <div className='count'>1</div>
                    <button>+</button>
                  </div>
                </div>
               </div>
               <div className='item'>
                <div className='checkP'>
                  <input type="checkbox" />
                </div>
                <div className='menu'>
                <i class='bx bx-cart' ></i>
                <i class='bx bx-heart' ></i>
                <i class='bx bx-x'></i>
                
                </div>
                <div className='image'>
                  <div className='img'>
                    <img src="images/product_2.png" alt="" />
                  </div>
                </div>
                <div className='info'>
                  <div className='price'>MAD 200.00 DH</div>
                  <div className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ...</div>
                  <div className='detail'>Brown</div>
                  <div className='quantity'>
                    <button>-</button>
                    <div className='count'>1</div>
                    <button>+</button>
                  </div>
                </div>
               </div>
               <div className='item'>
                <div className='checkP'>
                  <input type="checkbox" />
                </div>
                <div className='menu'>
                <i class='bx bx-cart' ></i>
                <i class='bx bx-heart' ></i>
                <i class='bx bx-x'></i>
                
                </div>
                <div className='image'>
                  <div className='img'>
                    <img src="images/product_3.png" alt="" />
                  </div>
                </div>
                <div className='info'>
                  <div className='price'>MAD 300.00 DH</div>
                  <div className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit ...</div>
                  <div className='detail'>Yellow</div>
                  <div className='quantity'>
                    <button>-</button>
                    <div className='count'>1</div>
                    <button>+</button>
                  </div>
                </div>
               </div>
            </div>
            </div>
            <div className='check'>
              <div className='summary'>
              <div className='summ'>Summary</div>
              <div className='S Subtotal'><span className='S1 span'>Subtotal</span> <span className='S2 span'>US $6.57</span></div>
              <div className='S Shipping'><span className='S1 span'>Shipping fee</span> <span className='S2 span'>US $13.34</span></div>
              <div className='S Total'><span className='S1 span'>Total</span> <span className='S2 span totalS'>US $19.91</span></div>
           
               
              </div>
              <div className='methods'>
                <h2>Payment methods</h2>
                <div className='method'>
                <div className='me'><img src="visa.png" alt="" /></div>
                <div className='me'><img src="paypal .png" alt="" /></div>
                <div className='me'><img src="card.png" alt="" /></div>
                </div>
                <div className='Protection'>
                  <h2>Buyer Protection</h2>
                 <span><div className='protectionIcon'><img src="shield.png" alt="" /></div>Get full refund if the item is not as described or if is not delivered</span>
                </div>
               </div>
            </div>
           
        </div>
        
    </div>
    </div>
  )
}

export default Cart
