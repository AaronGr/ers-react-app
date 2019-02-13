import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Users from '../../components/Users/Users';
import { ersClient } from '../../axios/ers.client';
import AuthContext from '../../security/auth-context';

class UserTable extends Component {
    static contextType = AuthContext;

    state = {
        users: [],
        errorFeedback: ''
    }

    async componentDidMount() {
        try {
            const res = await ersClient.get('users');
            let usersReceived = [...this.state.users];
            usersReceived = res.data;
            this.setState({users: usersReceived});
            return res;
        } catch (err) {
            console.log(err);
            this.setState({
                errorFeedback: 'failed to sign in'
            })
        }
    };

    render() {
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <Users users={this.state.users}/>
            </Table>
        )       
    }
}

export default UserTable;