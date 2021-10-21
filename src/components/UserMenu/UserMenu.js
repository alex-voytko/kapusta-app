import React, { useCallback } from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import s from './UserMenu.module.scss';

const makeNickname = emailString => {
    const findIndex = emailString.indexOf('@');
    return emailString.slice(0, findIndex);
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);
    const onLogOut = useCallback(
        () => dispatch(authOperations.logOut()),
        [dispatch],
    );
    return (
        <>
            <div className={s.userMenuContainer}>
                <div className={s.firstLetterContainer}>
                    <p className={s.firstLetter}>{email[0]}</p>
                </div>
                <p className={s.nickname}>{makeNickname(email)}</p>
                <div className={s.btnLogOutContainer}>
                    <button
                        type="button"
                        onClick={onLogOut()}
                        className={s.logoutButton}
                    >
                        <p className={s.logOutBtnText}>Выйти</p>
                    </button>
                </div>
            </div>
        </>
    );
}
