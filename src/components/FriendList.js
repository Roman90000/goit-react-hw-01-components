import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ items }) => {
    return <ul class="friend-list">{
                items.map(item => <li key={item.id} class="item"> <FriendListItem item={item} /></li>)}        
            </ul>
};