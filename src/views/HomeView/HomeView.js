import React from 'react';
import TransactionForm from '../../components/TransactionForm';
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';
import Container from '../../components/Container';
import TransactionList from '../../components/TransactionList';
// import ModalZeroBalance from '../../components/Modal/ModalZeroBalance'

import s from './HomeView.module.scss'

function HomeView() {
    return (
        <>
            <Container>
                <Balance />
                {/* <ModalZeroBalance /> */}
                <div className={s.container}>
                    <TransactionForm />
                    <div className={s.accounting}>
                      <TransactionList />
                <Summary />  
                    </div>                
                </div>          
            </Container>
        </>
    );
}

export default HomeView;
