import React from 'react';
import User from './User/User';

const users = (props) => {
    let users = null;
    if(props.users) {
        users = props.users.map(user => {
           return (
            <User 
                    key={user.userId}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    username={user.username}
                    email={user.email}
                    role={user.role.role}
                />
           )
       }) 
    }

    return (
        <tbody>
            {users}
        </tbody>
    )
}

export default users;