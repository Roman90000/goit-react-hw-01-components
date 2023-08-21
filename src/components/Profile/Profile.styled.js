import styled from 'styled-components';


export const Container = styled.div`
background-color: orange;
width: 400px;
border-radius: 15px;
margin: 20px auto 50px;
padding: 15px;
`;

export const AvatarInfo = styled.div`
width: 100%;
text-align: center;
`;

export const Username = styled.p`
color: #111;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 52px;
margin: 0;
`;

export const UserTagLocal = styled.p`
color: rgba(17, 17, 17, 0.60);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px;
letter-spacing: -0.36px;
`;

export const UserFollowersBox = styled.ul`
display: flex;
justify-content: center;
padding: 0px;
gap: 20px;
`;

export const UserFollowersItem = styled.li`
list-style: none;
border: 1px solid black;
text-align: center;
border-radius: 10px;
padding: 10px;

`;