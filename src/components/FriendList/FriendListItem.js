import { ListItem, ItemEl, Status } from "./FriendList.styled";

export const FriendListItem = ({ item: { isOnline, avatar, name } }) => { 
    return  <ListItem>
        <Status status={isOnline}></Status>
                <img src={avatar} alt="User avatar" width="48" />
                <ItemEl>{name}</ItemEl>
            </ListItem>
};