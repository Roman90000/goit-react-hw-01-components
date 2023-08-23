import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 430px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border-radius: 10px;
`;

export const Status = styled.span`
  margin: 0px 15px;

  background-color: ${props => {
    if (props.status === 'true') {
      return 'green';
    }
    return 'red';
  }};

  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background-color: orange;
  border-radius: 10px;
  padding: 10px;
`;

export const ItemEl = styled.p`
  margin-left: 25px;
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.56px;
`;
