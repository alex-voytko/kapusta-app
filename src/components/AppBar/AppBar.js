import React from 'react';
import styles from './AppBar.module.scss';
import headerLogo from '../../images/logos/header-logo.svg';

const AppBar = () => (
    <>
        <header className={styles.headerWrapper}>
            <div className="header-logo">
                <img src={headerLogo}></img>
            </div>
        </header>
    </>
);

export default AppBar;
