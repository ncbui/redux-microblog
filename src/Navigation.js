import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Navbar, 
  NavbarBrand, 
  NavItem, 
  Nav, 
  NavbarText
} from 'reactstrap'



/** Renders Navigation component
 * 
 * Prop
 * 
 * State
 * 
 * App -> Navbar/Header
 */


function Navigation() {
  return (
    <div className="Navigation">
      <Navbar color="light" light expand="md">
        <NavbarText>
          <h1> MICROBLOG</h1>
          <h3> smaller header</h3>
        </NavbarText>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/new">Add a new post</NavLink>
          </NavItem>
        </Nav>
  
      </Navbar>
    </div>
  );
}

export default Navigation;
