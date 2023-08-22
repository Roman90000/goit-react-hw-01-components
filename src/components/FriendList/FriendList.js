import { FriendListItem } from "./FriendListItem";
import { List } from "./FriendList.styled";


export const FriendList = ({ items }) => {
    return <List>{
        items.map(item => <FriendListItem item={item} />)}        
            </List>
};