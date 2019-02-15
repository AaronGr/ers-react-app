import React, { Component } from 'react';
import Login from '../../components/Login/Login';
import authContext from '../../security/auth-context';

class Homepage extends Component {
    static contextType = authContext;

    render() {
        return (
            <>
            {this.context.authenticated ? 
                <>
                <h1>Hello {this.context.user.username}!</h1>
                </>
                    :
                <>
                    <h1>Welcome to Revature's Expense Reimbursement System.</h1>
                    <Login />
                </>
            }
            </>
        )
    }
}

export default Homepage;