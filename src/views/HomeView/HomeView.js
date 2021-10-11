import React from 'react';
import TransactionForm from '../../components/TransactionForm'
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';

function HomeView() {
    return (
        <>
            <Balance />
            <TransactionForm/>
            <Summary />
        </>
    );
}

export default HomeView;
