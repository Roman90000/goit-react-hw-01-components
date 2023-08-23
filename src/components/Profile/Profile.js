import {
  Container,
  AvatarInfo,
  ImgEl,
  Username,
  UserTagLocal,
  UserFollowersBox,
  UserFollowersItem,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  items: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <ImgEl src={avatar} alt="User avatar" />

      <AvatarInfo>
        <Username>{username}</Username>
        <UserTagLocal>@{tag}</UserTagLocal>
        <UserTagLocal>{location}</UserTagLocal>
      </AvatarInfo>

      <UserFollowersBox>
        <UserFollowersItem>
          <span>
            <b>Followers</b>
          </span>
          <br />
          <span>{followers}</span>
        </UserFollowersItem>
        <UserFollowersItem>
          <span>
            <b>Views</b>
          </span>
          <br />
          <span>{views}</span>
        </UserFollowersItem>
        <UserFollowersItem>
          <span>
            <b>Likes</b>
          </span>
          <br />
          <span>{likes}</span>
        </UserFollowersItem>
      </UserFollowersBox>
    </Container>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
