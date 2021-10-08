import React, { useState } from "react";
import Calendar from '../Calendar';


import s from './TransactionForm.module.scss';

const TransactionForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <form className={s.transactionForm}>            
<Calendar 
selectedDate={startDate} onChange={(date) => setStartDate(date)} />
            <div className={s.inputTransaction}>
                <input type="text" placeholder="Описание товара"/>
<select >
    <option selected>Категория товара</option>
    <option value="transport">Транспорт</option>
    <option value="products">Продукты</option>
    <option value="health">Здоровье</option>
    <option value="alcohol">Алкоголь</option>
    <option value="entertainment">Развлечения</option>
    <option value="housing">Всё для дома</option>
    <option value="technique">Техника</option>
    <option value="communication">Коммуналка, связь</option>
    <option value="hobbies">Спорт, хобби</option>
    <option value="education">Образование</option>
    <option value="other">Прочее</option>
    </select>                
                <input type="text" placeholder="0,00"/>
            </div>
            <div>
                <button>ВВОД</button>
            <button>ОЧИСТИТЬ</button>
            </div>
            
        </form>
    )
    }
    
    export default TransactionForm;