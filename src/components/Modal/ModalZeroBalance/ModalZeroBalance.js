import styles from './Modal.module.scss';

const ModalZeroBalance = () => {
    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_top}></div>
            <p className={styles.modal_text_main}>
                Привет! Для начала работы внеси текущий баланс своего счета!
            </p>
            <p className={styles.modal_text_additional}>
                Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
        </div>
    );
}

export default ModalZeroBalance;
