import Table from 'rc-table';
import { format } from 'date-fns';
import ButtonForm from '../Buttons/ButtonForm';


import s from './TransactionList.module.scss'

const data = [{
    "description": "Income description",
    "amount": 100,
    "date": "2020-12-31",
    "category": "Доход",
    "_id": "507f1f77bcf86cd799439011"
  },
  {
    "description": "Income description",
    "amount": 100,
    "date": "2020-12-31",
    "category": "Доход",
    "_id": "507f1f77bcf86cd799439011"
  },]

  

const TransactionList =(item, onDelete)=> {

    const { Column } = Table;

return(
    <Table data={data} className={s.containerTList} scroll={{y: 200}}>     
        <Column title="ДАТА" dataIndex='date' key="date" width={100}  render={(date)=> format(new Date(date), 'dd-MM-yyyy')}/>
        <Column title="ОПИСАНИЕ" dataIndex="description" key="description" width={300} />
      <Column title="КАТЕГОРИЯ" dataIndex="category" key="category" width={200} />
      <Column title="СУММА" dataIndex="amount" key="amount" width={100} />
      <Column title="" dataIndex="" key="" width={70} render={() =><ButtonForm onClick={() =>onDelete(item._id)} className={s.btn} type="button"/>} />
    </Table>    
)
}

export default TransactionList;