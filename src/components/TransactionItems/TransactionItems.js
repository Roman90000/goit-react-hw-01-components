import { TableEl } from "./TransactionItems.styled";

export const TransactionItems = ({ item: { id, type, amount, currency } }) => {
    return  <tr key={id}>
                <TableEl>{type}</TableEl>
                <TableEl>{amount}</TableEl>
                <TableEl>{currency}</TableEl>
            </tr>
};