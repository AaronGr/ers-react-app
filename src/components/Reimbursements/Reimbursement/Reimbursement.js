import React from 'react';

const reimbursement = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.author}</td>
            <td>{props.amount}</td>
            <td>{props.submitted}</td>
            <td>{props.resolved}</td>
            <td>{props.description}</td>
            <td>{props.resolver}</td>
            <td>{props.status}</td>
            <td>{props.reimbType}</td>
        </tr>
    )
}

export default reimbursement;
