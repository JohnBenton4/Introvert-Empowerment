import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbar1() {
  return (
      <div className="nav-logo">
        <Nav.Link href="/">
          <h1>INTROVERT EMPOWERMENT </h1>
        </Nav.Link>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <li id="loginRoute">
                <Nav.Link href="/login">
                  <CiUser
                    size={20}
                    style={{ color: "#000000", marginRight: "2rem" }}
                  />
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}
