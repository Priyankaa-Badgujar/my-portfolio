import React from "react";
import './Navfile.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Route,Routes } from "react-router-dom";
import {Link,animateScroll as scroll} from 'react-scroll';
import About from "../About/About";
import Education from "../Education/Education";

const Navfile=()=>{


    return(
        <>
<div >
<Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-con">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to='/' className="active" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}><Nav.Link href="#about" > {About}Home</Nav.Link></Link>
           <Link to='education' className="active" spy={true} smooth={true} offset={50} duration={500}> <Nav.Link href="#education">About</Nav.Link></Link>
           <Link to='/skill' className="active" spy={true} smooth={true} offset={50} duration={500}> <Nav.Link href="#skill"> {Education}Skill</Nav.Link></Link>
           <Link to='/contact' className="active" spy={true} smooth={true} offset={50} duration={500}> <Nav.Link href="#contact">Contact Me</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

        </>
    )
}

export default Navfile;