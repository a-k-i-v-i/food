import { NavLink } from "react-router-dom"

const Header = ()=>{
    return(
        <div>
            <h1>LOGO</h1>
         <NavLink to={'/'}>   <h2>Menu</h2></NavLink>
         <NavLink to={'/order'}>   <h2>Order</h2></NavLink>
         <NavLink to={'/admin'}>   <h2>Admin</h2></NavLink>
            
        </div>
    )
}

export default Header