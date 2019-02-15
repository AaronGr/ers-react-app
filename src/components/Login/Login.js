import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { ersClient } from '../../axios/ers.client';
import AuthContext from '../../security/auth-context';

class Login extends Component {
    static contextType = AuthContext;

    state = {
        credentials: {
            username: '',
            password: ''
        },
        authenticated: false,
        errorFeedback: '',
        user: null
    };

    onUsernameChange = (event) => {
        const updatedCredentials = {...this.state.credentials};
        updatedCredentials.username = event.target.value;
        this.setState({credentials: updatedCredentials}); 
    };

    onPasswordChange = (event) => {
        const updatedCredentials = {...this.state.credentials};
        updatedCredentials.password = event.target.value;
        this.setState({credentials: updatedCredentials});
    };

    onSignIn = async (event) => {
        event.preventDefault();
        try {
            const res = await ersClient.post('auth/login', this.state.credentials);
            this.context.authenticated = true;
            this.setState({authenticated: true});
            this.context.user = res.data;
            return res;
        } catch (err) {
            console.log(err);
            this.setState({
                errorFeedback: 'failed to sign in'
            })
        }
    }

    render() {
        const { errorFeedback } = this.state;
        return (
            <> 
            {this.context.authenticated ? <h1>You're logged in!</h1>
            : 
            <Container>
                    <Form onSubmit={this.onSignIn}>
                        <Form.Row>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Username"
                                    onChange={this.onUsernameChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={this.onPasswordChange} />
                            </Form.Group>
                        </Form.Row>
                        <p id="error-message">{errorFeedback}</p>
                        <Button 
                            variant="primary" 
                            type="submit" >Sign In </Button>
                    </Form>
            </Container> 
            }
        </>
        )    
    }
};

export default Login;
