import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import UserTable from './containers/UserTable/UserTable';
import ReimbursementTable from './containers/ReimbursementTable/ReimbursementTable';

class App extends Component {
  render() {
    return (
      <div>        
          <Layout>
              <Route path="/login" component={Login} />
              <Route path="/users" component={UserTable} />
              <Route path="/reimbursements" component={ReimbursementTable} />
          </Layout>
 
      </div>
    );
  }
}

export default App;
