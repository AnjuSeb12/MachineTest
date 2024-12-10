import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const NavbarWithDesign = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[1440px] h-[100px] relative top-[-2px] opacity-100">
        <Navbar expand="lg" className="bg-black h-full">
          <Container>
            
            
            <Navbar.Brand
              href="#home"
              className="text-white font-oswald text-lg font-bold"
            >
              DEEP NET 

            </Navbar.Brand>

          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            
            <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
              <Nav className="text-right gap-4">
                <Nav.Link
                  href="#home"
                  className="text-white font-oswald text-sm font-normal leading-[23.71px] tracking-[0.03em] pr-4"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  href="#menu"
                  className="text-white font-oswald text-sm font-normal leading-[23.71px] tracking-[0.03em] pr-4"
                >
                  MENU
                </Nav.Link>
                <Nav.Link
                  href="#reservation"
                  className="text-white font-oswald text-sm font-normal leading-[23.71px] tracking-[0.03em] pr-4"
                >
                  MAKE A RESERVATION
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="text-white font-oswald text-sm font-normal leading-[23.71px] tracking-[0.03em] pr-4"
                >
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default NavbarWithDesign;
