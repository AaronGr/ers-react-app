import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class ReimbursementSubmissionPage extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Col md="3">
                            <Form.Group controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="money" />
                            </Form.Group>
                        </Col>         
                        <Col md="3">
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                        </Col>           
                        <Col md={{span:3}}>
                            <Form.Label>Type</Form.Label>
                                <select className="custom-select">
                                    <option value="1">Lodging</option>
                                    <option value="2">Travel</option>
                                    <option value="3">Food</option>
                                    <option value="3">Other</option>
                                </select>
                        </Col>
                        <Col md={{span:1}}>
                        <Form.Label></Form.Label>
                        <Button 
                            variant="primary" 
                            type="submit" >Submit</Button>
                        </Col>
                        <Col md={{span:1}}>
                        <Form.Label></Form.Label>
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

export default ReimbursementSubmissionPage;