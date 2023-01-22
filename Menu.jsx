import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {

return (
     <>
     <div className="menu_style">
     <NavLink  exact activeClassName="active_class" to ="/" >
     Home </NavLink>
    <NavLink  exact activeClassName="active_class" to ="/about" >
     About us </NavLink>
    <NavLink exact activeClassName="active_class" to ="/service" >
     Services </NavLink>
     <NavLink  exact activeClassName="active_class" to ="/user/Mr/Raju" >
     User </NavLink>
     <NavLink  exact activeClassName="active_class" to ="/search" >
     Search </NavLink>
     <NavLink  exact activeClassName="active_class" to ="/contact" >
     Contact us </NavLink>
    
    </div>
    </>
);

};
export default Menu;