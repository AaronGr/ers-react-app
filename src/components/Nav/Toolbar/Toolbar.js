import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../Logo/Logo';
import { LinkContainer } from 'react-router-bootstrap';
import authContext from '../../../security/auth-context';


class Toolbar extends Component {
    static contextType = authContext;
    state = {
        authenticated: false,
        user: null
    }


    render() {
        return (
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <Logo />
                        {' Expense Reimbursement System'}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>                        
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reimbursements">
                            <Nav.Link>Reimbursements</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    } 
}

export default Toolbar;