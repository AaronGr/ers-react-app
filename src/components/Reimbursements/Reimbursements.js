import React, { Component } from 'react';
import { withRouter } from "react-router";
import Reimbursement from './Reimbursement/Reimbursement';
import queryString from 'query-string';

class Reimbursements extends Component {

    onUpdateClicked = (reimb) => {
        const converted = {
            reimbursementId: reimb.reimbursementId,
            amount: reimb.amount,
            author: reimb.author.userId,
            resolver: reimb.resolver.userId,
            status: JSON.stringify(reimb.status),
            type: JSON.stringify(reimb.type),
            currentUser: this.props.currentUser
        }
        const query = queryString.stringify(converted);
        this.props.history.push({pathname: '/update-reimbursement/',
                                 search: `?${query}`});
    }

    render() {
        let reimbursements = null;
        if(this.props.reimbursements) {
            reimbursements = this.props.reimbursements.map(reimbursement => {
                return (
                        <Reimbursement 
                            key={reimbursement.reimbursementId}
                            author={reimbursement.author.username}
                            amount={reimbursement.amount}
                            submitted={reimbursement.dateSubmitted}
                            resolved={reimbursement.dateResolved}
                            resolver={reimbursement.resolver.username}
                            description={reimbursement.description}
                            status={reimbursement.status.status}
                            reimbType={reimbursement.type.type}
                            updateClicked={() => this.onUpdateClicked(reimbursement)}
                        />
                 )
            }) 
        }
    return (
        <tbody>
            {reimbursements}
        </tbody>
    )
    }

}

export default withRouter(Reimbursements);

