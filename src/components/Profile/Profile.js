import { Container } from "./Profile.styled";
import { AvatarInfo } from "./Profile.styled";
import { Username } from "./Profile.styled";
import { UserTagLocal } from "./Profile.styled";
import { UserFollowersBox } from "./Profile.styled";
import { UserFollowersItem } from "./Profile.styled";

export const Profile = ({ items: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return <Container>
  <div>
    <img
      src={avatar}
      alt="User avatar"
      width="400"
        />
        <AvatarInfo>
          <Username>{username}</Username>
          <UserTagLocal>@{tag}</UserTagLocal>
          <UserTagLocal>{location}</UserTagLocal>
        </AvatarInfo>
  </div>

  <UserFollowersBox>
    <UserFollowersItem>
      <span><b>Followers</b></span><br />
      <span>{followers}</span>
    </UserFollowersItem>
    <UserFollowersItem>
      <span><b>Views</b></span><br />
      <span>{views}</span>
    </UserFollowersItem>
    <UserFollowersItem>
      <span><b>Likes</b></span><br />
      <span>{likes}</span>
    </UserFollowersItem>
  </UserFollowersBox>
</Container>;
};