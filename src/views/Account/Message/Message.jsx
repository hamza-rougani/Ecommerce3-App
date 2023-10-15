import React from 'react'

function Message() {
  return (
    <div className='MessageCenter containerAccountS'>
    <div className='title'>
    <div className='img'><img src="m.png" alt="" /></div> Message Center
    </div>
    <div className='content'>
     <div className='user'>
          <ul>
               <li><div className='logo'><img id='imgAll' src="h.png" alt="" /></div>
                  <div className='text'>
                    <div className='name'>Estevanico Center</div>
                    <div className='desc'>Lorem ipsum dolor sit amet consectetur </div>
                  </div>
                  
               </li>
          </ul>
     </div>
     <div className='allMe'>
      <div className='message'>
        <div className='msg other'>
        <div className='child'>
             <div className='profile'> HR</div>
             <div className='msgC msgO'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='child'></div>
        </div>
        <div className='msg me'>
        <div className='child'></div>
        <div className='child childM'>
             <div className='msgC msgM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        
        </div>
        <div className='msg other'>
        <div className='child'>
             <div className='profile'> HR</div>
             <div className='msgC msgO'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='child'></div>
        </div>
        <div className='msg me'>
        <div className='child'></div>
        <div className='child childM'>
             <div className='msgC msgM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        
        </div>
        <div className='msg other'>
        <div className='child childM'>
             <div className='profile'> HR</div>
             <div className='msgC msgO'>Lorem ipsum dolor sit hhhh.</div>
        </div>
        <div className='child'></div>
        </div>
        <div className='msg me'>
        <div className='child'></div>
        <div className='child childM'>
             <div className='msgC msgM'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        
        </div>
        <div className='msg other'>
        <div className='child'>
             <div className='profile'> HR</div>
             <div className='msgC msgO'>Lorem ipsum dolor .</div>
        </div>
        <div className='child'></div>
        </div>
      </div>
      <div className='typing'>
      <div className='img'><img src="uplaod.png"  id="imgAll" alt="" /></div>
        <input type="text" placeholder='Type a Message ...'/>
        <div className='img'><img src="envoyer.png"  id="imgAll" alt="" /></div>
      </div>
      </div>
    </div>
 </div>
  )
}

export default Message
