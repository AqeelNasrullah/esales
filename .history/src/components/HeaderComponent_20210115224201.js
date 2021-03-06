import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark color="primary">
          <div className="container row ">
            <div className="bg-danger col-12 col-lg">
              <Nav></Nav>
            </div>
            <div className="bg-success d-none d-lg-block col-lg-1">
              <NavbarBrand>
                <a href="/">
                  <img
                    src="favicons/android-chrome-512x512.png"
                    alt="Brand Logo"
                    className="w-100"
                  />
                </a>
              </NavbarBrand>
            </div>
            <div className="bg-danger col-12 col-lg"></div>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
