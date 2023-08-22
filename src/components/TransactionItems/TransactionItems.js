import { TableEl } from "./TransactionItems.styled";
import PropTypes from "prop-types";

export const TransactionItems = ({ item: { id, type, amount, currency } }) => {
    return  <tr key={id}>
                <TableEl>{type}</TableEl>
                <TableEl>{amount}</TableEl>
                <TableEl>{currency}</TableEl>
            </tr>
};


TransactionItems.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
}