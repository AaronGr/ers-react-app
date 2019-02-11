import React from 'react';
import Reimbursement from './Reimbursement/Reimbursement';

const reimbursements = (props) => {
    let reimbursements = null;
    if(props.reimbursements) {
        reimbursements = props.reimbursements.map(reimbursements => {
           return (
            <Reimbursement 
                    key={reimbursements.reimbursementid}
                    id={reimbursements.reimbursementid}
                    author={reimbursements.author}
                    amount={reimbursements.amount}
                    submitted={reimbursements.datesubmitted}
                    resolved={reimbursements.dateresolved}
                    resolver={reimbursements.resolver}
                    description={reimbursements.description}
                    status={reimbursements.status}
                    reimbType={reimbursements.type}
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

