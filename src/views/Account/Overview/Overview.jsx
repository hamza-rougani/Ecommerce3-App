import React from 'react'

function Overview() {
  return (
    <div className='Overview'>
       <div className='Profile'>
        <div className='myInfo'>
         <div className='logo'><img src="https://media-mcetv.ouest-france.fr/wp-content/uploads/2021/07/vikings-qua-vecu-ragnar-lothbrok-pendant-le-saut-dans-le-temps-grande.jpg" alt="" /></div>
         <div className='name'><span id="name">HAMZA ROUGANI</span> <div id='id'>ID:134323 <span id='created'>create at jul 12, 2023</span></div> </div>
         </div>
         <div className='MyContact'>
         <b>My Contact</b>
            <div className='Mymedia'>
            
            <div className='img'><img src="http://localhost:5173/facebook.png" alt="" /></div>
            <div className='img'><img src="http://localhost:5173/instagram.png" alt="" /></div>
            <div className='img'><img src="http://localhost:5173/chercher.png" alt="" /></div>
            </div>
         </div>
        </div> 
        <div className='featursO'>
          
            <div className='containerO'>
         
              <div className='allAcc'>
                <div className='contentO'>
                    <div className='option orders'>
                      <div className='icon'><img src="shopping-bag.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Orders</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option remamber'>
                    <div className='icon'><img src="verifier.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Card</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option wishList'>
                    <div className='icon'><img src="love.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Wish List</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option cart'>
                    <div className='icon'><img src="chat.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Friends</span>
                        <b>42</b>
                      </div>
                    </div>
                    <div className='option following'>
                    <div className='icon'><img src="question.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Suggestions</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option friends'>
                    <div className='icon'><img src="telephone-intelligent.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Orders</span>
                        <b>120</b>
                      </div>
                    </div>
                </div>
                <div className='contentO'>
                    <div className='option orders'>
                      <div className='icon'><img src="process.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Processed</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option remamber'>
                    <div className='icon'><img src="coche.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Confirmed</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option wishList'>
                    <div className='icon'><img src="box.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Shipped</span>
                        <b>120</b>
                      </div>
                    </div>
                    <div className='option cart'>
                    <div className='icon'><img src="delivery.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Delivered</span>
                        <b>42</b>
                      </div>
                    </div>
                    <div className='option cart'>
                    <div className='icon'><img src="product-return.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Returns</span>
                        <b>42</b>
                      </div>
                    </div>
                    <div className='option friends'>
                    <div className='icon'><img src="telephone-intelligent.png" alt="" /></div>
                      <div className='detailAccount'>
                        <span id='title'>Orders</span>
                        <b>120</b>
                      </div>
                    </div>
                </div>
                </div>
              
            </div>
           
        </div>
    </div>
  )
}

export default Overview
