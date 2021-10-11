import React from 'react';
import TransactionForm from '../../components/TransactionForm';
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';
import Container from '../../components/Container';

function HomeView() {
    return (
        <>
            <Container>
                <Balance />
                <TransactionForm />
                <Summary />
            </Container>
        </>
    );
}

export default HomeView;
