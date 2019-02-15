import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { ersClient } from '../../axios/ers.client';
import AuthContext from '../../security/auth-context';

class ReimbursementUpdatePage extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        try {
            const {reimbursementId, amount, status, type, currentUser} = queryString.parse(this.props.location.search);
            this.state = {
                reimbursementId: reimbursementId,
                amount: amount,
                status: JSON.parse(status),
                type: JSON.parse(type),
                currentUser: currentUser
            }       
        } catch(err) {
            console.log(err);
        }

        console.log(this.state);
    }

    onTypeChange = (event) => {
        this.setState({
            ...this.state,
            type: {
                typeId: event.target.value
            }
        })
        console.log(this.state.type);
    }

    onStatusChange = (event) => {
        this.setState({
            ...this.state,
            status: {
                statusId: event.target.value
            }
        })
    }

    onAmountChange = (event) => {
        this.setState({
            ...this.state,
            amount: event.target.value
        })
    }

    onUpdateSubmit = async (event) => {
        event.preventDefault();
        try {
            const jsonToSend = {
                reimbursementId: this.state.reimbursementId,
                amount: this.state.amount,
                resolver: this.state.currentUser,
                dateResolved: Date.now(),
                type: {
                    type: '',
                    typeId: this.state.type.typeId,
                },
                status: {
                    status: '',
                    statusId: this.state.status.statusId
                }
            }
            const res = await ersClient.patch('reimbursements', jsonToSend);
            console.log(res.data);
            this.props.history.goBack();
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    onCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onUpdateSubmit}>
                    <Row>
                        <Col md="3">
                            <Form.Group controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={this.state.amount}
                                    onChange={this.onAmountChange} />
                            </Form.Group>
                        </Col>
                        <Col md={{span:3}}>
                            <Form.Label>Status</Form.Label>
                            <select 
                                className="custom-select"
                                defaultValue={this.state.status.statusId}
                                onChange={this.onStatusChange}>
                                <option value="1">Pending</option>
                                <option value="2">Approved</option>
                                <option value="3">Denied</option>
                            </select>
                        </Col>
                        <Col md={{span:3}}>
                            <Form.Label>Type</Form.Label>
                                <select 
                                    className="custom-select"
                                    value={this.state.type.typeId}
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
                            type="submit" >Update</Button>
                        </Col>
                        <Col md={{span:1}}>
                        <Form.Label></Form.Label>
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

export default withRouter(ReimbursementUpdatePage);