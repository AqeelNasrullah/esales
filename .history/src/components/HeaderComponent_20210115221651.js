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

                    </div>
                </div>
            </Navbar>
        );
    }
}

export default Header;