import {Routes,Route,Navigate} from "react-router-dom"

import Home from "./views/home/home"
import Detail from "./views/Details/Detail"
import Cart from "./views/Shopping Cart/Cart"
import Register from "./views/User/Register"
import Search from "./views/Search/Search"
import Account from "./views/Account/Account"
import General from "./layout/General"
import Auth from "./layout/Auth"
import InternetUser from "./layout/InternetUser"
import Admin from "./layout/Admin"
import Prancipal from "./views/Administrator/Prancipal/Prancipal"
function RoutesAll() {
  return (
   <Routes>
    <Route path="/" element={<General/>}>
      <Route path="/" element={<Navigate to="/Home"/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/" element={<InternetUser/>}>
          <Route path="/item" element={<Detail/>}/>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
      </Route>
      <Route path="/" element={<Auth/>}>
          <Route path="/Account" element={<Account/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
      </Route>
    </Route>
    <Route path="/" element={<Admin/>}>
          <Route path="/manager" element={<Prancipal/>}></Route>
      </Route>
   </Routes>
  )
}

export default RoutesAll
