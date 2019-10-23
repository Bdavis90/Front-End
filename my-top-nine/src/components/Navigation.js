import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand inline href="#home">
        My Top Nine
      </Navbar.Brand>
      <Nav className="mr-auto" inline>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#signup">Sign Up</Nav.Link>
        <Nav.Link href="#login">Log In</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar>
  );
};

export default Navigation;
