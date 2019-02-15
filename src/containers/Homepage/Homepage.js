import React, { Component } from 'react';
import Login from '../../components/Login/Login';
import authContext from '../../security/auth-context';
import ReimbursementTable from '../ReimbursementTable/ReimbursementTable';

class Homepage extends Component {
    static contextType = authContext;

    render() {
        return (
            <>
            {this.context.authenticated ? 
                <>
                <h1 style={{textAlign: "center"}}>Hello {this.context.user.username}!</h1>
                <ReimbursementTable />
                </>
                    :
                <>
                    <h1 style={{textAlign: "center"}}>Welcome to Revature's Expense Reimbursement System.</h1>
                    <Login />
                </>
            }
            </>
        )
    }
}

export default Homepage;