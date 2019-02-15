import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import queryString from 'query-string';
import { ersClient } from '../../axios/ers.client';

class UserUpdatePage extends Component {
    constructor(props) {
        super(props);
        try {
            const userParam = queryString.parse(this.props.location.search);
            this.state = {
                userId: userParam.userId,
                email: userParam.email,
                firstName: userParam.firstName,
                lastName: userParam.lastName,
                username: userParam.username,
                role: JSON.parse(userParam.role)
            }
        } catch(err) {
            console.log(err);
        }

        console.log(this.state);
    }
    onCancelHandler = () => {
        this.props.history.goBack();
    }

    onUsernameChange = (event) => {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value
        })
    }

    onFirstNameChange = (event) => {
        this.setState({
            ...this.state,
            firstName: event.target.value
        })
    }

    onLastNameChange = (event) => {
        this.setState({
            ...this.state,
            lastName: event.target.value
        })
    }

    onUpdateSubmit = async (event) => {
        event.preventDefault();
        try {
            const jsonToSend = {
                ...this.state,
            }
            const res = await ersClient.patch('users', jsonToSend);
            console.log(res.data);
            this.props.history.goBack();
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onUpdateSubmit}>
                    <Row className="justify-content-md-center">
                        <Col md="3">
                                <Form.Group controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" value={this.state.username}
                                            onChange={this.onUsernameChange} />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={this.state.email}
                                            onChange={this.onEmailChange}/>
                                </Form.Group>
                            </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="3">
                                <Form.Group controlId="firstname">
                                        <Form.Label>Firstname</Form.Label>
                                        <Form.Control type="text" value={this.state.firstName}
                                            onChange={this.onFirstNameChange} />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group controlId="lastname">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" value={this.state.lastName}
                                            onChange={this.onLastNameChange}/>
                                </Form.Group>
                            </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={{span:3, offset:3}}>
                            <select className="custom-select" value={this.state.role.roleId}>
                                <option value="1">Admin</option>
                                <option value="2">Finance-Manager</option>
                                <option value="3">Associate</option>
                            </select>
                        </Col>
                        <Col md={{span:1, offset:1}}>
                        <Button 
                            variant="primary" 
                            type="submit" >Update</Button>
                        </Col>
                        <Col md={{span:1}}>
                        <Button 
                            variant="danger" 
                            type="button"
                            onClick={this.onCancelHandler} >Cancel</Button>
                        </Col>
                    </Row>
                </Form> 
           </Container>
        )
    }
}

export default UserUpdatePage;