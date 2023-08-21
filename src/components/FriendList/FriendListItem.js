import { ListItem, ItemEl } from "./FriendList.styled";

export const FriendListItem = ({ item: { isOnline, avatar, name } }) => { 
    return  <ListItem>
                <span>{isOnline}</span>
                <img src={avatar} alt="User avatar" width="48" />
                <ItemEl>{name}</ItemEl>
            </ListItem>
};