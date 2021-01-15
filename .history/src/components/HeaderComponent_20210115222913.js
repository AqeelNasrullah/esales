import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <Nav>
                                <NavLink to="/">Home</NavLink>
                            </Nav>
                        </div>
                        <div className="d-none d-lg-block col-lg">
                            <NavbarBrand>
                                <a href="/"><img src="favicons/android-chrome-512x512.png" alt="Brand Logo" width="100%" /></a>
                            </NavbarBrand>
                        </div>
                        <div className="col-12 col-lg-5">
                        
                        </div>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default Header;