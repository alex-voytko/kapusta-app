import data from './bd/expences.json';

import styles from './ReportsStatistics.module.css';

const ReportsStatistics = () => {
    const reports = data;
    return (
        <div className={styles.container}>
            <ul className={styles.container_ul}>
                {reports.map(result => (
                    <li className={styles.container_item}>
                        <span className={styles.container_item_txt}>
                            {result.price}
                        </span>
                        <img
                            src="https://chefrestoran.ru/wp-content/uploads/2018/10/604655519.jpg"
                            alt="img"
                        />

                        <span className={styles.container_item_txt}>
                            {result.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ReportsStatistics;
