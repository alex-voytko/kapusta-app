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
               dateFormat="dd.MM.yyyy"
                name="date" 
                fixedHeight withPortal />
        </div>
)

export default Calendar;