import React from 'react';
import { Navbar, FormControl, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'

export default function Topbar(props) {

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Desafio Aiko</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><FaSearch size={25} color="red" /></Navbar.Toggle>
      
    </Navbar>
  );
};

