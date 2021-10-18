import s from './TransactionList.module.scss';

const TransactionList = () => (
    <>
        <div className={s.containerTList}>
            <table>
                <tr>
                    <th>Дата</th>
                    <th>Описание</th>
                    <th>Категория</th>
                    <th>Сумма</th>
                    <th>Удалить</th>
                </tr>
                <tr>
                    <td>05.09.2019</td>
                    <td>Метро (Lorem ipsum dolor sit... </td>
                    <td>Транспорт</td>
                    <td>- 30.00 грн.</td>
                    <td>
                        <button type="button" className={s.btn}></button>
                    </td>
                </tr>
            </table>
        </div>
    </>
);

export default TransactionList;
