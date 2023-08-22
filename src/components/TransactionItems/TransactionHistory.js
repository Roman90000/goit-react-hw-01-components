import { TransactionItems } from "./TransactionItems";
import { Table, Caption } from "./TransactionItems.styled";

export const TransactionHistory = ({items}) => {
    return <Table>
  <thead>
    <tr>
      <Caption>Type</Caption>
      <Caption>Amount</Caption>
      <Caption>Currency</Caption>
    </tr>
  </thead>

    <tbody>
            {items.map(item => <TransactionItems key={item.id} item={item} />)}
    
    
  </tbody>
</Table>
};