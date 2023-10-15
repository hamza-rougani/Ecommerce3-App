import React from 'react'
import Products from '../home/Products'
import Comments from './Comments'
import Discription from './Discription'
import Footer from '../home/Footer'
import Header from '../home/Header'

function Detail() {
  return (
    <div className='Detail'>
        <Header/>
      <div className='content'>
        <div className='pr'>
        <div className='images'>
            <div className='imgP'>
               <img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='subImages'>
            <div className='img'><img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div className='img'><img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div className='img'><img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div className='img'><img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                
            </div>
        </div>
        <div className='info'>
            <div className='details'>
                <p id="subTitle">Lorem ipsum dolor sit amet</p>
                <h1 id="title">Lorem ipsum dolor sit amet</h1>
                <div id='sold'><span id="pricePrev">50 DH </span> <span id='per'>(20%  OFF)</span></div>
                <div className='price'>40.00 DH</div>
                <div className='subT'>Lorem ipsum dolor sit amet consectetur</div>
                <div className='size'><span id='select'>SELECT SIZE</span> <span id="size">Size Chart</span></div>
                <div className='shipsS'>
                    <div className='si si1'>S</div>
                    <div className='si si2'>M</div>
                    <div className='si si3'>L</div>
                    <div className='si si4'>XL</div>
                    <div className='si si5'>XXL</div>
                </div>
                <div className='btns'>
                    <button className="btn buy">BUY NOW</button>
                    <button className="btn cart"><i class='bx bx-cart-add' ></i> ADD TO CART</button>
                </div>
                <div className='info1'>
                    <div className='shippingInfo'>Shipping</div>
                    <div className='shiInfo'>Lorem ipsum dolor sit, amet consectetur adipisicing</div>
                    
                </div>
                <div className='info1'>
                    <div className='shippingInfo'>Amet consectetur</div>
                   <ul>
                    <li>Dolor sit</li>
                    <li>Lorem ipsum</li>
                   </ul>
                </div>
                <div className='info1'>
                    <div className='shippingInfo green'>Lorem ipsum</div>
                   <ul>
                    <li>Dolor sit</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum dolor sit</li>
                   </ul>
                </div>
            </div>
        </div>
        </div>
        
        <div className='similaires'>
            <div className='products'>
        <div className='pr2 contentProduct'>
        <div className='titlePr'>
        <h2>Articles similaires</h2>
    </div>
         
    <div className='items'>
 
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_3.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_4.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_5.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_6.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_7.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_1.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_2.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_3.png" alt="" />
           </div>
           <div className='text'>
            <h3>Clothes man</h3>
            <div className='evaluation'>
            <span>19.89DH</span>
            <div className='star'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            </div>
           </div>
        </div>
       
    </div>
    </div>
    
 </div>
        </div>
        
      </div>

      <Discription/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default Detail
