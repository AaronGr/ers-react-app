import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class UserTable extends Component {
    render() {
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
            </Table>
        )       
    }
}

export default UserTable;