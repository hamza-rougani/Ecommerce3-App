import React ,{useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import DropDown from "../Menu/dropdown" 
import Account from '../Menu/Account'
import ContactUs from '../Menu/ContactUs'
import Helps from '../Menu/Helps'
import Search from '../Menu/Search'
function Header() {
  const [search,setsearch] = useState(null);
  const SearchRef = useRef(null)
  useEffect(()=>{
    document.addEventListener("click",checkElement)
  },[])
  const checkElement = (e)=>{
    console.log(SearchRef)
    if(!SearchRef.current.contains(e.target)){
      setsearch(false)
    }
 
  }
  return (
    <div className='header'>
      <div className='list'>
      <div className='logo'>
        <img src="h.png" alt="" />
        <Link to="/" id='linkDark'><span id="name">Estevanico</span></Link>
      </div>
      
        <ul id='ul'>
            <li id='categ'>
              Categories 
            <i class='bx bx-chevron-down'></i>
               <DropDown/>
           </li>
            <li className='contact position'>Contact us <i class='bx bx-chevron-down'></i><ContactUs/></li>
            <li className='helps position'>Helps <i class='bx bx-chevron-down'></i><Helps/></li>
            <li id='search' > 
            <div ref={SearchRef}>
            <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='search ... '/>
            <div className='btns'>
            <button id='searchIcon'><i class='bx bx-search-alt-2'></i></button>
            <button id='filter'>Products<i class='bx bx-chevron-down'></i></button>
              </div>
              </div>
               {search ?<Search/>:""}
             
              </li>
              <Link to="cart" id='linkDark'><li id='cart'><i class='bx bx-cart'></i> <div className='count'>0</div></li></Link>
        </ul>
  
      </div>
      <div className='btnsH'>
      <ul  id='ul'>
      
            <li id="account"><button id='ac'><i class='bx bx-user'></i> Account</button><Account/></li>
        </ul>
      
      </div>
    </div>
  )
}

export default Header
