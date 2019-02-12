import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import UserTable from './containers/UserTable/UserTable';
import ReimbursementTable from './containers/ReimbursementTable/ReimbursementTable';
import UserUpdatePage from './containers/UserUpdatePage/UserUpdatePage';

class App extends Component {
  render() {
    return (
      <div>        
          <Layout>
              <Route path="/login" component={Login} />
              <Route path="/users" component={UserTable} />
              <Route path="/reimbursements" component={ReimbursementTable} />
              <Route path="/update-user" component={UserUpdatePage} />
          </Layout>
 
      </div>
    );
  }
}

export default App;
