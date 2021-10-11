import React from 'react';
import styles from './AppBar.module.scss';
import headerLogo from '../../images/logos/header-logo.svg';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getAuth);
    return (
        <>
            <header className={styles.headerWrapper}>
                <div className="header-logo">
                    <img src={headerLogo}></img>
                </div>
                {isLoggedIn ? <UserMenu /> : null}
            </header>
        </>
    );
}
