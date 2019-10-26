import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand inline>My Top Nine</Navbar.Brand>
      <Nav inline>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
