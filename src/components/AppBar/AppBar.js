import React from 'react';
import styles from './AppBar.module.scss';
import headerLogo from '../../images/logos/header-logo.svg';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';

export default function AppBar() {
    const isAuth = useSelector(authSelectors.getIsAuth);
    return (
        <>
            <header className={styles.headerWrapper}>
                <div className="header-logo">
                    <img src={headerLogo}></img>
                </div>
                {isAuth ? <UserMenu /> : null}
            </header>
        </>
    );
}
