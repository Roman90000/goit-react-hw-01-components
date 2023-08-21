import { ListItem } from "./Statistics.styled";


export const StatisticsList = ({ item: { label, percentage } }) => { 
      return <ListItem>
                  <span>{label}</span><br />
                  <span><b>{percentage}%</b></span>
            </ListItem>
};