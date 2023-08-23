import { StatisticsList } from './StatisticsList';
import { Container, Title, List, BoxUl } from './Statistics.styled';

export const Statistics = ({ title, items }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <BoxUl>
        <List>
          {items.map(item => (
            <StatisticsList key={item.id} item={item} />
          ))}
        </List>
      </BoxUl>
    </Container>
  );
};
