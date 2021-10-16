import Delete from '../../images/delete.svg';

import s from './TransactionList.module.scss'


const TransactionList =()=> {
return(
    <div className={s.containerTList}>
        <div className={s.itemTransaction}>
        <div>ДАТА</div>
        <div>ОПИСАНИЕ</div>
        <div>КАТЕГОРИЯ</div>
        <div>СУММА</div>        
        <div></div>
    </div> 

    <ul className={s.listTransaction}>
        <li>05.09.2019</li>
        <li>Метро (Lorem ipsum dolor sit... </li>
        <li>Транспорт</li>
        <li>- 30.00 грн.</li>
        <li><button type="button" className={s.btn}></button></li>
        </ul>        
       
    </div>
    
)
}

export default TransactionList;