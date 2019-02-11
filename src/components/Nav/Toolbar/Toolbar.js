import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../Logo/Logo';

class Toolbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <Logo />
                    {' Expense Reimbursement System'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    } 
}

export default Toolbar;