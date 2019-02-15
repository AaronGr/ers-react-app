import React from 'react';
import { Button } from 'react-bootstrap';

const reimbursement = (props) => {
    return (
        <tr>
            <td>{props.author}</td>
            <td>{props.amount}</td>
            <td>{props.submitted}</td>
            <td>{props.resolved}</td>
            <td>{props.description}</td>
            <td>{props.resolver}</td>
            <td>{props.status}</td>
            <td>{props.reimbType}</td>
            <td>
                <Button
                    variant="primary"
                    onClick={props.updateClicked}>Update</Button>
            </td>
        </tr>
    )
}

export default reimbursement;
