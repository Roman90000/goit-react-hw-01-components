import { HistoryEl } from "./TransactionItems.styled";

export const TransactionItems = ({ item: { id, type, amount, currency } }) => {
    return  <tr key={id}>
                <HistoryEl>{type}</HistoryEl>
                <HistoryEl>{amount}</HistoryEl>
                <HistoryEl>{currency}</HistoryEl>
            </tr>
};