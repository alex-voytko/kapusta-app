import React from 'react';
// import Button from '../../components/Buttons/Button';
// import BalanceString from '../../components/BallancString/BallanceString';
// import ToReportsButton from '../../components/Buttons/ToReportsButton';
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';

function HomeView() {
    return (
        <>
            <Balance />

            <Summary />
        </>
    );
}

export default HomeView;
