import React, { Component } from 'react';
import Login from '../../components/Login/Login';
import authContext from '../../security/auth-context';

class Homepage extends Component {
    static contextType = authContext;

    render() {
        return (
            <>
                <h1>Welcome to Revature's Expense Reimbursement System.</h1>
                <h1>Please log in:</h1>
                <Login />
            </>
        )
    }
}

export default Homepage;