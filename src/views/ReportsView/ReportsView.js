import SwiperReport from '../../components/Swiper/SwiperReport';
import ReportsStatistics from '../../components/ReportsStatistics/ReportsStatistics';
import Chartjs from '../../components/Chartjs/Chartjs';
import StatisticMenu from '../../components/StatisticMenu/StatisticMenu';
import styles from './Report.module.css';

function ReportsView() {
    return (
        <>
            <div className={styles.categories}>
                <StatisticMenu />
                <div className={styles.dataline}>
                    <div className={styles.dataline_block}>
                        <span className={styles.dataline_label}>Расходы:</span>
                        <span className={styles.dataline_expenses}>
                            -18 000.00
                        </span>
                    </div>
                    <span className={styles.datalineJumper} />
                    <div className={styles.dataline_block}>
                        <span className={styles.dataline_label}>Доходы:</span>
                        <span className={styles.dataline_income}>
                            +45 000.00
                        </span>
                    </div>
                </div>
                <div className={styles.expencesBlock}>
                    <SwiperReport />
                    <ReportsStatistics />
                </div>
                <div className={styles.expencesBlock}>
                    <div className={styles.chartBlock}>
                        <Chartjs />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReportsView;
