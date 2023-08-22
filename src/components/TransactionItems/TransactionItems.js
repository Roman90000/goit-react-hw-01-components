import { TableEl } from "./TransactionItems.styled";
import PropTypes from "prop-types";

export const TransactionItems = ({ item: {type, amount, currency } }) => {
    return  <tr>
                <TableEl>{type}</TableEl>
                <TableEl>{amount}</TableEl>
                <TableEl>{currency}</TableEl>
            </tr>
};


TransactionItems.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
}