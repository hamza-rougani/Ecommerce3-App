import React from 'react'
import { Link } from 'react-router-dom'
function Account() {
  return (
    <div className='AccountM'>
        <div className='btnsA'>
           <Link to="/Register"> <button id="reg">Register</button></Link>
            <button id="login">Login</button>
        </div>
        <ul>
            <Link to="/Account?ac=Orders"><li>My Orders</li></Link>
            <li>Message Center</li>
            <li>Payment</li>
            <li>My Favorite Stores</li>
            <li>My Coupons</li>
        </ul>
    </div>
  )
}

export default Account
