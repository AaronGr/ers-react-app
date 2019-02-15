import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import UserTable from './containers/UserTable/UserTable';
import ReimbursementTable from './containers/ReimbursementTable/ReimbursementTable';
import UserUpdatePage from './containers/UserUpdatePage/UserUpdatePage';
import ReimbursementUpdatePage from './containers/ReimbursementUpdatePage/ReimbursementUpdatePage';
import ReimbursementSubmissionPage from './containers/ReimbursementSubmissionPage/ReimbursementSubmissionPage';
import Homepage from './containers/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div>        
          <Layout>
              
              <Route path="/home" component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/users" component={UserTable} />
              <Route path="/reimbursements" component={ReimbursementTable} />
              <Route path="/update-user" component={UserUpdatePage} />
              <Route path="/update-reimbursement" component={ReimbursementUpdatePage} />
              <Route path="/submit-reimbursement" component={ReimbursementSubmissionPage} />
              <Route path="" exact component={Homepage} />
          </Layout>
      </div>
    );
  }
}

export default App;
