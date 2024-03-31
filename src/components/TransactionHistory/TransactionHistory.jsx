import style from './TransactionHistory.module.css'
export const TransactionHistory =({transactions})=>{
    return(
        <table className={style.table}>
  <thead className={style.headTable}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={style.tbody}>
     {transactions.map((transaction) => (
    <tr key={transaction.id} className={style.сolumn}>
      <td className={style.tbody}>{transaction.type}</td>
      <td className={style.tbody}>{transaction.amount}</td>
      <td className={style.tbody}>{transaction.currency}</td>
    </tr>
    ))}
  </tbody>
</table>

    )
}