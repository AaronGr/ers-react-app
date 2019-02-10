import React, { Component } from 'react';

import style from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <>
            <main className={style.Content}>
                 {this.props.children}
            </main>
            </>
        )
    }
}

export default Layout;