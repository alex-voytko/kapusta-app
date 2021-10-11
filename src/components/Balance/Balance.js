import ToReportsButton from '../Buttons/ToReportsButton';
import BalanceString from '../BallanceString';
import Button from '../Buttons/Button';
import styles from './Balance.module.scss';

export default function Balance() {
    return (
        <div className={styles.BalanceHome}>
            <BalanceString styles={styles}></BalanceString>
            <Button />
            <ToReportsButton />
        </div>
    );
}
