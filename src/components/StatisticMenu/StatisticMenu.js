import React from 'react';
import { history } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './StatisticMenu.module.css';
import { ReactComponent as Arrow } from './left-arrow.svg'; 

moment.locale('ru');

const StatisticMenu = ({
  // monthChanger,
  backMonthHandler,
  nextMonthHandler,
 
}) => {

  
  return (
    <div className={styles.wrap}>
        <button
          className={styles.arrowBtn}
          type="button"
          onClick={()=>this.props.history.push('/home')}
        >
          <Arrow className={styles.arrowSvg} />
          <p className={styles.backText}>Вернуться на главную</p>
          <p className={styles.backTextTabl}>На главную</p>
        </button>

      <div className={styles.calendarWrap}>
        <p className={styles.calendarText}>Текущий период :</p>
        <div className={styles.switchWrap}>
          <button
            type="button"
            className={styles.calendarBtn
            }
            // onClick={monthChangeHandler}
            name="leftBtn"  
          >
            &#8249;
          </button>
          <p className={styles.cldrMonth}>{moment().format('MMMM YYYY')}</p>
          <button
            type="button"
            className={ styles.calendarBtn}
            // onClick={monthChangeHandler}
            name="rightBtn"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

StatisticMenu.propTypes = {
  monthChanger: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  backMonthHandler: PropTypes.bool.isRequired,
  nextMonthHandler: PropTypes.bool.isRequired,
};

export default StatisticMenu;