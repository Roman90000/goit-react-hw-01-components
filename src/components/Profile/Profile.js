import { Container } from "./Profile.styled"

export const Profile = ({ items: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return <div>
  <Container>
    <img
      src={avatar}
      alt="User avatar"
      width="400"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </Container>

  <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>;
};