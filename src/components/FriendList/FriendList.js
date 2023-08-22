import { FriendListItem } from "./FriendListItem";
import { List } from "./FriendList.styled";
import PropTypes from "prop-types";


export const FriendList = ({ items }) => {
    return <List>{
        items.map(item => <FriendListItem item={item} />)}        
            </List>
};

FriendListItem.PropTypes = {
    items: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}