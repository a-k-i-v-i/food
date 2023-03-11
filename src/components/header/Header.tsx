import { NavLink } from "react-router-dom"
// import  LOGO from './../image/image 2.png'

const Header = ()=>{
    return(
        <header id="header">
           <div className="container">
            <div className="header">
                <NavLink to='/'><h1 className="logo">LOGO</h1></NavLink>
                <div className="navbar">
                <NavLink className='navbar--a' to={'/'}>   <h2>Menu</h2></NavLink>
                <NavLink className='navbar--a' to={'/order'}>   <h2>Order</h2></NavLink>
                <NavLink className='navbar--a' to={'/admin'}>   <h2>Admin</h2></NavLink>
                </div>
            </div>
           </div>
            
        </header>
    )
}

export default Header