import Table from 'rc-table';
import { format } from 'date-fns'


import s from './TransactionList.module.scss'

const data = [{
    "description": "Income description",
    "amount": 100,
    "date": "2020-12-31",
    "category": "Доход",
    "_id": "507f1f77bcf86cd799439011"
  },]

  const Button =()=>(
    <button type="button" className={s.btn} onClick></button>
  )


const TransactionList =(item, onDelete)=> {

    const { Column } = Table;

return(
    <Table data={data} className={s.containerTList} scroll={{y: 200}}>     
        <Column title="ДАТА" dataIndex='date' key="date" width={100}  render={(date)=> format(new Date(date), 'dd-MM-yyyy')}/>
        <Column title="ОПИСАНИЕ" dataIndex="description" key="description" width={300} />
      <Column title="КАТЕГОРИЯ" dataIndex="category" key="category" width={200} />
      <Column title="СУММА" dataIndex="amount" key="amount" width={200} />
      <Column title="" dataIndex="" key="" render={() =><Button onClick={() =>onDelete(item._id)}/>} />
    </Table>    
)
}

export default TransactionList;