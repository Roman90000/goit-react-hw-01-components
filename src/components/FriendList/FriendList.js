import { FriendListItem } from "./FriendListItem";
import { List } from "./FriendList.styled";


export const FriendList = ({ items }) => {
    return <List>{
        items.map(item => <li key={item.id}>
            <FriendListItem item={item} /></li>)}        
            </List>
};