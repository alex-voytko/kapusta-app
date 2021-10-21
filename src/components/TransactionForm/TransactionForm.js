import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../Calendar';
import ButtonForm from '../Buttons/ButtonForm';
import Select, { StylesConfig } from 'react-select';



import s from './TransactionForm.module.scss';


const options = [
    { value: 'transport', label: 'Транспорт' },
  { value: 'products', label: 'Продукты' },
  { value: 'health', label: 'Здоровье' },
  { value: 'alcohol', label: 'Алкоголь' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'home', label: 'Всё для дома' },
  { value: 'technics', label: 'Техника' },
  { value: 'bill', label: 'Комуналка, связь' },
  { value: 'sport', label: 'Спорт, хобби' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Прочее' },
  ];

  

const TransactionForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();

    const [description, setDescription] = useState('');
    const inputDescription = useCallback(event => {
        setDescription(event.currentTarget.value);
    }, []);


    const [sum, setSum] = useState('');
    const inputSum = useCallback(event => {
        setSum(event.currentTarget.value);
    }, []);
    // useSelector

   
    const resetInput = ()=>{ }

    
    return (
        <form className={s.transactionForm}>   
            <Calendar className={s.calendar} selectedDate={startDate} onChange={(date) => setStartDate(date)} />

            <div className={s.inputTransaction}>
            <input className={s.inputDesc} type="text" placeholder="Описание товара" onChange={inputDescription}   required />
                
            <Select styles={s.select} options={options} /*value={category}*/  placeholder='Категория товара'  />

            <input className={s.inputAmount} type="text" placeholder="0,00" onChange={inputSum} ng-pattern="/^\d{1,10}$/" required/>   
            <label className={s.calcIcon} htmlform="calculator"/>            
            </div>
            <div className={s.btnBlock}>
                <ButtonForm className={s.btn} onClick={()=>{}} text="ВВОД" type="submit" accent/>
                <ButtonForm className={s.btn} onClick={resetInput} text="ОЧИСТИТЬ" type="button" />
            
            </div>
        </form>
    );
};

export default TransactionForm;
