import React ,{useState}from 'react'
import Overview from './Overview/Overview';
import Orders from './Orders/Orders';
import Header from '../home/Header';
import { Link, useLocation } from 'react-router-dom'
import Payment from './Payment/Payment';
import Return from './Return/Return';
import Settings from './Settings/Settings';
import Shippingaddresse from './Shippingaddress/Shippingaddress'
import Message from './Message/Message'
import Helps from './Help/Help';
import Suggestion from './Suggestion/Suggestion';
import Feedback from './Feedback/Feedback'
function Account() {
    
    const Location = useLocation();
    const queryParams = new URLSearchParams(Location.search)
    const acParams = queryParams.get("ac")
    const [clicked,setclicked] = useState(acParams?acParams:"Overview")
  return (
    <div className='Orders Account'>
    <div className='container'>
   <div className='Account'>
   <ul className='ulAc'>
            <h3>Account</h3>
            <Link id="linkLight" to="/Account?ac=Overview"><li id={clicked === "Overview"?"order":""} onClick={()=>setclicked("Overview")}><div className='imgAc'><img src="list-search.png" alt="" /></div> Overview</li></Link>
            <Link id="linkLight" to="/Account?ac=Orders"><li id={clicked === "Orders"?"order":""} onClick={()=>setclicked("Orders")}><div className='imgAc'><img src="order-delivery.png" alt="" /></div> Orders</li></Link>
            <Link id="linkLight" to="/Account?ac=Payment"><li id={clicked === "Payment"?"order":""} onClick={()=>setclicked("Payment")}> <div className='imgAc'><img src="credit-card.png" alt="" /></div> Payment</li></Link>
            <Link id="linkLight" to="/Account?ac=return"><li id={clicked === "return"?"order":""} onClick={()=>setclicked("return")}><div className='imgAc'><img src="product-return.png" alt="" /></div> Refund and return</li></Link>
            <Link id="linkLight" to="/Account?ac=Shipping"><li id={clicked === "Shipping"?"order":""} onClick={()=>setclicked("Shipping")}><div className='imgAc'><img src="location-pin.png" alt="" /></div> Shipping address</li></Link>
            <Link id="linkLight" to="/Account?ac=Message"><li id={clicked === "Message"?"order":""} onClick={()=>setclicked("Message")}><div className='imgAc'><img src="m.png" alt="" /></div> Message center</li></Link>
            <Link id="linkLight" to="/Account?ac=Help"><li id={clicked === "Help"?"order":""} onClick={()=>setclicked("Help")}><div className='imgAc'><img src="support.png" alt="" /></div> Help center</li></Link>
            <Link id="linkLight" to="/Account?ac=Suggestion"><li id={clicked === "Suggestion"?"order":""} onClick={()=>setclicked("Suggestion")}><div className='imgAc'><img src="suggestion.png" alt="" /></div>Suggestion</li></Link>
            <Link id="linkLight" to="/Account?ac=Feedback"><li id={clicked === "Feedback"?"order":""} onClick={()=>setclicked("Feedback")}><div className='imgAc'><img src="feedback.png" alt="" /></div> Feedback</li></Link>
            <Link id="linkLight" to="/Account?ac=Settings"><li id={clicked === "Settings"?"order":""} onClick={()=>setclicked("Settings")}><div className='imgAc'><img src="settings.png" alt="" /></div> Settings</li></Link>
        </ul>
   </div>
   <div className='ordersA'>
       {acParams === "Overview"?<Overview/>:""}
       {acParams === "Orders"?<Orders/>:""}
       {acParams === "Payment"?<Payment/>:""}
       {acParams === "return"?<Return/>:""}
       {acParams === "Shipping"?<Shippingaddresse/>:""}
       {acParams === "Message"?<Message/>:""}
       {acParams === "Help"?<Helps/>:""}
       {acParams === "Suggestion"?<Suggestion/>:""}
       {acParams === "Feedback"?<Feedback/>:""}
       {acParams === "Settings"?<Settings/>:""}
   </div>
   </div>
</div>
  )
}

export default Account
