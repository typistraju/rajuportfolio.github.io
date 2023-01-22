import  {NavLink} from "react-router-dom";



const Header = () => {

    return (
        <>
           <header>
<a href="#"> logo  </a>
<nav>
 <ul>
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
 </nav>
 </header>
         </>
    );
};
export default Header;