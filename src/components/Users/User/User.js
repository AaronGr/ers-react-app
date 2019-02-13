import React from 'react';

const user = (props) => {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default user;