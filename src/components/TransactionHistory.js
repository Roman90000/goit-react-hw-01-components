import { TransactionItems } from "./TransactionItems";

export const TransactionHistory = ({items}) => {
    return <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
            {items.map(item => <TransactionItems item={item} />)}
    
    
  </tbody>
</table>
};