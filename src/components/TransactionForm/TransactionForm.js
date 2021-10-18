import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../Calendar';
import s from './TransactionForm.module.scss';

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
    return (
        <form className={s.transactionForm}>
            <Calendar
                selectedDate={startDate}
                onChange={date => setStartDate(date)}
            />
            <div className={s.inputTransaction}>
                <input
                    type="text"
                    placeholder="Описание товара"
                    onChange={inputDescription}
                />
                <select>
                    <option selected>Категория товара</option>
                    <option value="transport">Транспорт</option>
                    <option value="products">Продукты</option>
                    <option value="health">Здоровье</option>
                    <option value="alcohol">Алкоголь</option>
                    <option value="entertainment">Развлечения</option>
                    <option value="housing">Всё для дома</option>
                    <option value="technique">Техника</option>
                    <option value="communication">Коммуналка, связь</option>``
                    <option value="hobbies">Спорт, хобби</option>
                    <option value="education">Образование</option>
                    <option value="other">Прочее</option>
                </select>
                <input type="number" placeholder="0,00" onChange={inputSum} />
            </div>
            <div>
                <button>ВВОД</button>
                <button>ОЧИСТИТЬ</button>
            </div>
        </form>
    );
};

export default TransactionForm;
