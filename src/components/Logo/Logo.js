import React from 'react';

import revatureLogo from '../../assets/images/rev-logo.png';
import style from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={style.Logo}>
            <img src={revatureLogo} alt="revature" />
        </div>
    )
}

export default logo;