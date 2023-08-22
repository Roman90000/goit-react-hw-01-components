import { ListItem } from "./Statistics.styled";
import PropTypes from "prop-types";



export const StatisticsList = ({ item: {id, label, percentage } }) => { 
      return <ListItem key={id}>
                  <span>{label}</span><br />
                  <span><b>{percentage}%</b></span>
            </ListItem>
};

StatisticsList.prototype = {
      item: PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired
      })
}