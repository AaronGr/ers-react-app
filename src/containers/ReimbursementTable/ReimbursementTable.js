import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { ersClient } from '../../axios/ers.client';
import Reimbursements from '../../components/Reimbursements/Reimbursements'
import AuthContext from '../../security/auth-context'

class ReimbursementTable extends Component {
    static contextType = AuthContext;
    state = {
        reimbursements: [],
        errorFeedback: ''
    }

    async componentDidMount() {
        if (this.context.user && (this.context.user.role.role === 'admin' || this.context.user.role.role === 'finance-manager')) {
            try {
                const res = await ersClient.get('reimbursements/');
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
        } else if (this.context.user) {
            try {
                const res = await ersClient.get(`reimbursements/author/userId/${this.context.user.userId}`);
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
        }
    };

    getPending = async () => {
        try {
            const res = await ersClient.get(`reimbursements/status/1`);
            let reimbursementsReceived = [...this.state.reimbursements];
            reimbursementsReceived = res.data;
            this.setState({reimbursements: reimbursementsReceived});
            return res;
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return  (
            <>
            <Button variant="outline-primary" onClick={this.getPending}>Get Pending</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Amount</th>
                        <th>Submitted</th>
                        <th>Resolved</th>
                        <th>Description</th>
                        <th>Resolver</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>
                <Reimbursements 
                    reimbursements={this.state.reimbursements}
                    currentUser={this.context.user.userId} />
            </Table>
            </>
        )       
    }
}

export default ReimbursementTable;