import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import './CustomNavbar.css';

const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" dark expand="md">
          <Link className="navbar-brand" to="/">Mark Mulligan</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center justify-content-center">
          <Nav className="" navbar>
            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/skills">Skills</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
          </Nav> 
          <div className="navbar-spacer"></div>
        </Collapse>
       
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
