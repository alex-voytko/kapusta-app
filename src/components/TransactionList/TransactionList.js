import Table from 'rc-table';



import s from './TransactionList.module.scss'

const data = [{
    "description": "Income description",
    "amount": 100,
    "date": "2020-12-31",
    "category": "Доход",
    "_id": "507f1f77bcf86cd799439011"
  },]

  const Button =()=>(
    <button type="button" className={s.btn} ></button>
  )


const TransactionList =()=> {

    const { Column } = Table;

return(
    <Table data={data} className={s.containerTList} scroll={{y: 200}}>     
        <Column title="ДАТА" dataIndex='date' dateformat="dd.MM.yyyy" key="date" width={100} />
        <Column title="ОПИСАНИЕ" dataIndex="description" key="description" width={300} />
      <Column title="КАТЕГОРИЯ" dataIndex="category" key="category" width={200} />
      <Column title="СУММА" dataIndex="amount" key="amount" width={200} />
      <Column title="" dataIndex="" key="" render={() =><Button onClick onDelete/>} />
    </Table>    
)
}

export default TransactionList;