import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <div className="row bg-warning">
                            <div className="bg-danger col-12 col-lg-5">
                                <Nav>
                                </Nav>
                            </div>
                            <div className="bg-success d-none d-lg-block col-lg">
                                <NavbarBrand center>
                                    <a href="/"><img src="favicons/android-chrome-512x512.png" alt="Brand Logo" className="w-100" /></a>
                                </NavbarBrand>
                            </div>
                            <div className="bg-danger col-12 col-lg-5">
                            
                            </div>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;