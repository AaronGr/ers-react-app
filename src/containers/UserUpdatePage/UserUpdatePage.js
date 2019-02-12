import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class UserUpdatePage extends Component {
    state = {
        user: {
            userId: 0,
            username: '',
            firstname: '',
            lastname: '',
            role: {
                role: '',
                roleId: 0
            }
        }
    }

    render() {
        return (
            <Container>
                <Form>
                    <Row className="justify-content-md-center">
                        <Col md="3">
                                <Form.Group controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                </Form.Group>
                            </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="3">
                                <Form.Group controlId="firstname">
                                        <Form.Label>Firstname</Form.Label>
                                        <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group controlId="lastname">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={{span:3, offset:3}}>
                            <select className="custom-select">
                                <option selected>Change Role...</option>
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
                            type="button" >Cancel</Button>
                        </Col>
                    </Row>
                </Form> 
           </Container>
        )
    }
}

export default UserUpdatePage;