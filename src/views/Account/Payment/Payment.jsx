import React, { useEffect } from 'react'

function Payment() {
    const addClicked =()=>{
        let add = document.querySelector(".Payment")
        add.classList.add("addActive")
    }
    const removeadd =()=>{
        let add = document.querySelector(".Payment")
        add.classList.remove("addActive")
    }
  return (
    <div className='Payment'>
       <div className='title'>
       <div className='img'><img src="credit-card.png" alt="" /></div> Payment
       </div>
       <div className='content'>
         <div className='CardsTitle'>Cards</div>
         <button className='CardsSpe' onClick={addClicked}>
         <i class='bx bx-plus' ></i>
         </button>
         <div className='saved'>No cards saved. Add one below to get started.
</div>
<div className='add'>
<div className='Add-credit-card'> <div className='return'><button onClick={removeadd}><i class='bx bx-left-arrow-alt' ></i></button></div> Add Credit Card</div>
<div className='rt'>
<div className='contAdd'>
        
        <div className='img'><img src="https://www.visa.co.za/dam/VCOM/regional/cemea/kenya/card-products/images/classic-800x450.jpg" alt="" /></div>
        <div className='input number'>
            <div className='ti'>Card Number</div>
            <input type="text" />
        </div>
       <div className='half'>
       <div className='input name'>
            <div className='ti'>Cardholder Name</div>
            <input type="text" />
        </div>
        <div className='input name'>
            <div className='ti'>Valid Thruv</div>
            <input type="text" />
        </div>
       </div>
    </div>
    <div className='contAdd'>
        
        <div className='img'><img src="https://www.budgetbanque.fr/data/wp-content/uploads/2018/01/code-cvv-cvc.png" alt="" /></div>
        <div className='input number'>
            <div className='ti'>Security Code (CCV)</div>
            <input type="text" />
        </div>
       <div className='half'>
       </div>
    </div>
   
    </div>
</div>
       </div>
    </div>
  )
}

export default Payment
