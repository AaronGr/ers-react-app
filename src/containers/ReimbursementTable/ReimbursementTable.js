import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { ersClient } from '../../axios/ers.client';
import Reimbursements from '../../components/Reimbursements/Reimbursements'

class ReimbursementTable extends Component {
    
    state = {
        reimbursements: [],
        errorFeedback: ''
    }

    async componentDidMount() {
        try {
            const res = await ersClient.get('reimbursements/status/2');
            let reimbursementsReceived = [...this.state.reimbursements];
            reimbursementsReceived = res.data;
            this.setState({reimbursements: reimbursementsReceived});
            return res;
        } catch (err) {
            console.log(err);
            this.setState({
                errorFeedback: 'failed to sign in'
            })
        }
    };

    render() {
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Amount</th>
                        <th>Submitted</th>
                        <th>Resolved</th>
                        <th>Description</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <Reimbursements reimbursements={this.state.reimbursements} />
            </Table>
        )       
    }
}

export default ReimbursementTable;