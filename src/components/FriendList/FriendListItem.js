import { ListItem, ItemEl, Status } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ item: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <Status status={isOnline.toString()}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <ItemEl>{name}</ItemEl>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
