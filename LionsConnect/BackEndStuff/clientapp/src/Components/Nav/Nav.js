import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Nav.css'

const MyNav= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isLoggedIn= props.isLoggedIn;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LionsConnect</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className= "text1" href="/aboutus/">About Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className= "text3" nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/createpost">Create Public Post </DropdownItem>
                <DropdownItem href = "/createprivatepost"> Create Private Posts</DropdownItem>
                <DropdownItem> View All Post</DropdownItem>
                <DropdownItem> View Private Post</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href = "/login/"> Login</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default MyNav;
