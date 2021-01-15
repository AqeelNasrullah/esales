import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <div className="row">
                        <Nav className="col-12 col-lg-5">
                        </Nav>
                        <div className="">
                        <NavbarBrand className="d-none d-lg-block col-lg">
                        <a href="/"><img src="favicons/android-chrome-512x512.png" alt="Brand Logo" width="100%" /></a>
                    </NavbarBrand>
                        </div>
                        <Nav className="col-12 col-lg-5">
                        </Nav>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default Header;