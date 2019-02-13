import React from 'react';
import Reimbursement from './Reimbursement/Reimbursement';

const reimbursements = (props) => {
    let reimbursements = null;
    if(props.reimbursements) {
        reimbursements = props.reimbursements.map(reimbursements => {
           return (
            <Reimbursement 
                    key={reimbursements.reimbursementId}
                    id={reimbursements.reimbursementId}
                    author={reimbursements.author.username}
                    amount={reimbursements.amount}
                    submitted={reimbursements.dateSubmitted}
                    resolved={reimbursements.dateResolved}
                    resolver={reimbursements.resolver.username}
                    description={reimbursements.description}
                    status={reimbursements.status.status}
                    reimbType={reimbursements.type.type}
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

export default reimbursements;

