import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const NavbarWithDesign = () => {
  return (
    <div >
      <div className="bg-black text-white font-oswald">
      <header
        style={{
          
          width: "1440px",
          height: "100px",
          margin: "0 auto",
          position: "relative",
          top: "-2px",
          opacity: "1",
          
          
        }}
        className="flex justify-center items-center"
      >
        <Navbar expand="lg" className="w-full bg-black text-white">
          <div
            style={{ width: "1440px" }}
            className="flex justify-between items-center mx-auto"
          >
            <Navbar.Brand href="#home" className="text-white text-lg">
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="flex justify-end"
            >
              <Nav className="flex items-center space-x-6 text-base">
                <Nav.Link
                  href="#home"
                  className="text-white hover:text-gray-400"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  href="#menu"
                  className="text-white hover:text-gray-400"
                >
                  MENU
                </Nav.Link>
                <Nav.Link
                  href="#reservation"
                  className="text-white hover:text-gray-400"
                >
                  MAKE A RESERVATION
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="text-white hover:text-gray-400"
                >
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      <Outlet />

      </div>
      
    </div>
  );
};

export default NavbarWithDesign
