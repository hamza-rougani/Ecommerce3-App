import React, { useEffect, useState } from 'react'
import Hover from './Hover'
import Deal from './Deal'
import { Link } from 'react-router-dom'
function Products() {
    const [selectbutton,setselectbutton] = useState("btn1")
    const [categorie,setcategorie] = useState("ALL")
    const ButtonClick=(e)=>{
     setselectbutton(e)
     if(e==="btn1"){
        setcategorie("ALL")
     }else if(e==="btn2"){
        setcategorie("MAN")
     }
    } 
  return (
    <div className='products'>
        <div className='contentProduct'>
        <div className='titlePr'>
        <h2>New Arrivals</h2>
        <hr />
    </div>
            <div className='buttonsP'>
                <ul>
                    <li  className={`btn ${selectbutton === "btn1" ? "clicked":""}`} onClick={()=>ButtonClick("btn1")}>ALL</li>
                    <li  className={`btn ${selectbutton === "btn2" ? "clicked":""}`} onClick={()=>ButtonClick("btn2")}>MAN</li>
                    <li  className={`btn ${selectbutton === "btn3" ? "clicked":""}`} onClick={()=>ButtonClick("btn3")}>WOMAN</li>
                    <li  className={`btn ${selectbutton === "btn4" ? "clicked":""}`} onClick={()=>ButtonClick("btn4")}>SELECT</li>
                    <li  className={`btn ${selectbutton === "btn5" ? "clicked":""}`} onClick={()=>ButtonClick("btn5")}><i class='bx bx-dots-horizontal-rounded'></i></li>
                </ul>
                
            </div>
   
    <div className='items'>
        {categorie==="ALL" ? 
        <>
        <Link to="/item">
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
        </Link>
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
        </>
        : 
        <>
        <div className='item'>
           <div className='img'>
            <div className='status'>
                SOLD
            </div>
            <img src="images/product_8.png" alt="" />
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
            <img src="images/product_9.png" alt="" />
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
        </>
        }
    </div>
    <Deal/>
    <div className='informationShop'>
     <ul>
        <li>
        <i class='bx bx-package'></i>
            <div className='info'>
            <div className='title'>FREE SHIPING</div>
            <div className='desc'>8AM - 09PM</div>
            </div>
        </li>
        <li>
        <i class='bx bx-credit-card'></i>
            <div className='info'>
                
                

            <div className='title'>CACH ON DELIVERY</div>
            <div className='desc'>The Internet Tend To Repeat</div>
            </div>
        </li>
        <li>
        <i class='bx bx-rotate-left' ></i>
        

            <div className='info'>
            <div className='title'>45 DAYS RETURN</div>
            <div className='desc'>Making it Look Like Readable</div>
            </div>
        </li>
        <li>
        <i class='bx bx-time-five'></i>
            <div className='info'>
            <div className='title'>OPENING ALL WEEK</div>
            <div className='desc spec'>8AM - 09PM</div>
            </div>
        </li> {/* <div className='active'>
                        <h2>Here are the trends I see coming this fall</h2>
                        <p>BY ADMIN | DEC 01, 2017</p>
                        <button>check out</button>
                        </div> */}
     </ul>
    </div>
    <div className='logs'>
        <div className='images'>
            <div className='bloc1'>
                <div className='img img1'>
                   <Hover/><img src="https://images.pexels.com/photos/4904569/pexels-photo-4904569.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div className='img6'>
                <div className='img img_6'><Hover/><img src="https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div className='img img_7'><Hover/><img src="https://images.pexels.com/photos/4737509/pexels-photo-4737509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                </div>
                <div className='img img3'><Hover/><img src="https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div className='img img4'><Hover/><img src="images/blog_2.jpg" alt="" /></div>
            </div>
            <div className='bloc2'>
                <div className='img img5'><Hover/><img src="https://images.pexels.com/photos/6311506/pexels-photo-6311506.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div className='img6'>
                        <div className='Tworows'>
                        <div className='img img3'><Hover/><img src="images/desc_2.jpg" alt="" /></div>
                <div className='img img4'><Hover/><img src="images/desc_3.jpg" alt="" /></div>
                        </div>
                        <div className='Tworows'>
                        <div className='img img3'><Hover/><img src="images/single_1.jpg" alt="" /></div>
                <div className='img img4'><Hover/><img src="images/single_3.jpg" alt="" /></div>
                        </div>
                    
                </div>

            </div>
            <div className='bloc3'>
                <div className='twoColumns'>
                        
                        <div className='img img_7'><Hover/><img src="images/single_2.jpg" alt="" /></div>
                        <div className='Tworows'>
                        <div className='img img_6'><Hover/><img src="images/blog_3.jpg" alt="" /></div>
                        <div className='img img_7'><Hover/><img src="images/product_1.png" alt="" /></div>
                        </div>
                       
                    
                </div>
                <div className='img img8'><Hover/><img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div className='img img9'><Hover/><img src="https://images.pexels.com/photos/5214266/pexels-photo-5214266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            </div>
        </div>
    </div>
    </div>
 </div>
  )
}

export default Products
