import styles from './BalanceString.module.scss';
function BalanceString() {
    const balance = '00.00';

    const handleChange = e => {};

    const handleSubmit = evt => {
        evt.preventDefault();
    };

    return (
        <form className={styles.balance_string} onSubmit={handleSubmit}>
            <label className={styles.form_label}>
                <span className={styles.form_title}>Баланс:</span>
                <span className={styles.input_box}>
                    <input
                        className={styles.input}
                        type="text"
                        value={`${balance} UAH`}
                        name="balans"
                        onChange={handleChange}
                        pattern="\d+(\.\d{2})"
                        title="Баланс должен состоять из цифр, разделителя 'точка' и не более двух цифр после точки"
                        required
                    />
                </span>
            </label>
        </form>
    );
}
export default BalanceString;
