import React, { Component } from 'react';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';

import style from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <>
            <Toolbar />
            <main className={style.Content}>
                 {this.props.children}
            </main>
            </>
        )
    }
}

export default Layout;