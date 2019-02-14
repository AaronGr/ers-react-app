import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { ersClient } from '../../axios/ers.client';
import AuthContext from '../../security/auth-context';

class ReimbursementSubmissionPage extends Component {
    static contextType = AuthContext;
    state = {
        amountValidation: {
            amount: '5',
            decimalAdded: false,
            valid: false,
        },

        descriptionValidation: {
            description: '',
            valid: false
        },

        type: '4'
    }

    onAmountChangeHandler = (event) => {
        let inputToValidate = this.state.amountValidation;
        inputToValidate = event.target.value;
        this.setState({amountValidation: {amount: inputToValidate}});
    }

    onDescriptionChangeHandler = (event) => {
        let inputToValidate = this.state.descriptionValidation;
        inputToValidate = event.target.value;
        this.setState({descriptionValidation: {description: inputToValidate}});
    }

    onTypeChange = (event) => {
        this.setState({type: event.target.value})
    }

    onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const jsonToSend = {
                reimbursementId: 0,
                author: this.context.user.userId,
                amount: this.state.amountValidation.amount,
                description: this.state.descriptionValidation.description,
                resolver: null,
                type: this.state.type
            }
            const res = await ersClient.post('reimbursements', jsonToSend);
            console.log(res.data);
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmitHandler}>
                    <Row>
                        <Col md="3">
                            <Form.Group controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    type="text"
                                    onChange={this.onAmountChangeHandler} />
                            </Form.Group>
                        </Col>         
                        <Col md="3">
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    onChange={this.onDescriptionChangeHandler} />
                            </Form.Group>
                        </Col>           
                        <Col md={{span:3}}>
                            <Form.Label>Type</Form.Label>
                                <select 
                                    className="custom-select"
                                    onChange={this.onTypeChange}>
                                    <option value="1">Lodging</option>
                                    <option value="2">Travel</option>
                                    <option value="3">Food</option>
                                    <option value="4">Other</option>
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