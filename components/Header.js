import  {NavLink} from "react-router-dom";



const Header = () => {

    return (
        <>
           <header>
<a className="logo" href="#"> logo  </a>
<nav className="navbar">
<div className="container">
 <ul className="nav_links">
 <li>
    <NavLink to ="/"> Home </NavLink>
 </li>
 <li><NavLink to ={"/about"}> About </NavLink> 
 </li>
 <li><NavLink to ={"/contact"}> Contact </NavLink>
  </li>
 <li><NavLink to ={"/service"}> Service </NavLink> 
 </li>
  </ul>
  </div>
 </nav>
 </header>
         </>
    );
};
export default Header;