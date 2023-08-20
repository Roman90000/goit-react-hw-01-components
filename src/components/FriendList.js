import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ items }) => {
    return <ul>{
                items.map(item => <li key={item.id}> <FriendListItem item={item} /></li>)}        
            </ul>
};