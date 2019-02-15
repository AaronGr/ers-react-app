import React, { Component } from 'react';
import User from './User/User';
import { withRouter } from 'react-router';
import queryString from 'query-string';

class Users extends Component {

    onUpdateClicked = (user) => {
        const converted = {
            ...user,
            role: JSON.stringify(user.role)
        }
        const query = queryString.stringify(converted);
        this.props.history.push({pathname: 'update-user',
        search: `?${query}`});
    }

    render () {
        let users = null;
        if(this.props.users) {
            users = this.props.users.map(user => {
            return (
                <User 
                        key={user.userId}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        username={user.username}
                        email={user.email}
                        role={user.role.role}
                        updateClicked={() => this.onUpdateClicked(user)}
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
}

export default withRouter(Users);