import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './Calendar.module.scss';


const Calendar = ({selectedDate, handleChange}) => (
    <div className={s.calendarContainer}>  
        <label className={s.calendarIcon} htmlForm="calendar"/> 

            <DatePicker className={s.datepicker}
             id="datepicker" 
             selected={selectedDate}
              onChange={handleChange}
               dateformat="dd.MM.yyyy"
                name="date" 
                fixedHeight />
        </div>
)

export default Calendar;