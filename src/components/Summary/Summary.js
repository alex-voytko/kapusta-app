import React from 'react';
// // import PropTypes from 'prop-types';
// // import moment from 'moment';
// import 'moment/locale/uk';

import styles from './Summary.module.scss';
const Summary = () => {
    return (
        <div className={styles.summary}>
            <h4>Сводка</h4>
            <ul className={styles.summary_list}>
                <li className={styles.summary_item}>
                    <span>Ноябрь</span>
                    <span>10 000.00</span>
                </li>
                <li className={styles.summary_item}>
                    <span>Октябрь</span>
                    <span>30 000.00</span>
                </li>
                <li className={styles.summary_item}>
                    <span>Сентябрь</span>
                    <span>30 000.00</span>
                </li>
                <li className={styles.summary_item}>
                    <span>Август</span>
                    <span>20 000.00</span>
                </li>
                <li className={styles.summary_item}>
                    <span>Июль</span>
                    <span>15 000.00</span>
                </li>
                <li className={styles.summary_item}>
                    <span>Июнь</span>
                    <span>18 000.00</span>
                </li>
            </ul>
        </div>
    );
};
export default Summary;
