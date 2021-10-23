import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../Calendar';
import ButtonForm from '../Buttons/ButtonForm';
import Select from 'react-select';

import s from './TransactionForm.module.scss';


const customStyles = {
  option: (provided, { isSelected }) => ({
    ...provided,
    color: isSelected ? '#52555f' : '#c7ccdc',
    backgroundColor: isSelected ? '#f5f6fb' : 'none',
    ':hover': {
      color: '#52555f',
      backgroundColor: '#f5f6fb',
    },
  }),
  control: () => ({
    display: 'inline-flex',
    width: 188,
    height: 44,
    paddingTop: 1,
    paddingBottom: 2,
    border: '2px solid #f5f6fb',
    textAlign: 'left',
    fontSize: 12,  
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  
  menu: (provided, state) => ({
    ...provided,
    top: 34,
    borderRadius: 'none',
        border: '2px solid #f5f6fb',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    paddingLeft: 12,
  }),
};

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

  const optionsIncomes =[
    {value: 'salary', label: 'З/П'},
    {value: 'income' , label: 'Доп. доход'},
  ]

const TransactionForm = (amount) => {
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



   const resetInput = () =>{
    setDescription('');        
    setSum('')
   }


   
   

    
    return (
        <form className={s.transactionForm}>   
            <Calendar className={s.calendar} selectedDate={startDate} onChange={(date) => setStartDate(date)} />

            <div className={s.inputTransaction}>
            <input className={s.inputDesc} type="text" placeholder="Описание товара" onChange={inputDescription}   required />
                
            <Select styles={customStyles} options={options} /* value={category}*/  placeholder='Категория товара'/>

            <input className={s.inputAmount} type="text" placeholder="0,00" onChange={setSum} gn-pattern="/^\d{1,10}$/" required/>   
            <label className={s.calcIcon} htmlform="calculator"/>            
            </div>
            <div className={s.btnBlock}>
                <ButtonForm className={s.btn} text="ВВОД" type="submit"/>
                <ButtonForm className={s.btn} onClick={resetInput} text="ОЧИСТИТЬ" type="reset" />
            
            </div>
        </form>
    );
};

export default TransactionForm;
