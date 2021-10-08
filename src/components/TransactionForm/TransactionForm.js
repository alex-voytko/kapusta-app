import { useState } from "react";
import Calendar from '../Calendar'
import s from './TransactionForm.module.scss'

const TransactionForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <form className={s.transactionForm}>
            <Calendar selected={startDate} onChange={(date) => setStartDate(date)} />
            <div className={s.inputTransaction}>
                <input type="text" placeholder="Описание товара"/>
                <input type="text" placeholder="Категория товара"/>
                <input type="text" placeholder="0,00"/>
            </div>
            <button>ВВОД</button>
            <button>ОЧИСТИТЬ</button>
        </form>
    )
    }
    
    export default TransactionForm;