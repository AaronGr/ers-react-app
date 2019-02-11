import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    user: null,
    login: () => {}
});

export default authContext;
