import React from 'react';
import { Button } from 'react-bootstrap';

const user = (props) => {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.role}</td>
            <td>
                <Button
                    variant="primary"
                    onClick={props.updateClicked}>Update</Button>
            </td>
        </tr>
    )
}

export default user;