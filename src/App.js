import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        
          <Layout>
              <Login />
          </Layout>
 
      </div>
    );
  }
}

export default App;
