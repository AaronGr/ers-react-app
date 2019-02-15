import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../Logo/Logo';
import { LinkContainer } from 'react-router-bootstrap';
import authContext from '../../../security/auth-context';
import { NavDropdown } from 'react-bootstrap';


class Toolbar extends Component {
    static contextType = authContext;
    state = {
        authenticated: false,
        user: null
    }

    render() {
        let adminLinks = null;
        let reimbursementLinks = null;
        if (this.context.user) {
            reimbursementLinks = (
                <NavDropdown title="Reimbursements">
                    <LinkContainer to="/reimbursements">
                        <Nav.Link>View All</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/submit-reimbursement">
                        <Nav.Link>Submit Reimbursements</Nav.Link>
                    </LinkContainer>      
                </NavDropdown>
            )
        }
        if( this.context.user && this.context.user.role.role === 'admin') {
           adminLinks = (
                <NavDropdown title="Users">                      
                <LinkContainer to="/users">
                    <Nav.Link>View Users</Nav.Link>
                </LinkContainer>
                </NavDropdown>
            )
        }

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
                        {adminLinks}
                        {reimbursementLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    } 
}

export default Toolbar;