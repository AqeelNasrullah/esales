import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Row, Col } from "reactstrap"

class Header extends Component {
  render() {
    return (
        <Navbar dark color="success" expand="md">
            <NavbarToggler/>
            <NavbarBrand href="/" className="d-block d-md-none" style={{width: '50px'}}>
                <img src="favicons/android-chrome-512x512.png" alt="BrandLogo" className="w-100" />
            </NavbarBrand>
            <div className="container-fluid">
                <Row className="justify-content-center mx-auto w-100">
                    <Col md="5"></Col>
                    <Col md="1">
                        <NavbarBrand href="/" className="w-100 d-none d-md-block">
                            <img src="favicons/android-chrome-512x512.png" alt="BrandLogo" className="w-100" />
                        </NavbarBrand>
                    </Col>
                    <Col md="5"></Col>
                </Row>
            </div>
        </Navbar>
    );
  }
}

export default Header;
