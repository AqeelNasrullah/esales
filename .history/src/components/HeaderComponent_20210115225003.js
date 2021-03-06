import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container m-auto row">
        <div className="col-lg-5 bg-danger"></div>
        <div className="col-lg-2 bg-primary">
            <img src="favicons/android-chrome-512x512.png" alt="Brand Logo" className="w-50" />
        </div>
        <div className="col-lg-5 bg-success"></div>
      </div>
    );
  }
}

export default Header;
