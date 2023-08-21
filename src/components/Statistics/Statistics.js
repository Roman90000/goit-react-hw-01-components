import { StatisticsList } from "./StatisticsList";
import { Container, Title, List, BoxUl } from "./Statistics.styled";


export const Statistics = ({items}) => {
    return  <Container>
        <Title>Upload stats</Title>
            <BoxUl>
                <List>{items.map(item => <li key={item.id}>
                    <StatisticsList item={item} />
                </li>)}</List>
            </BoxUl>
            </Container>
};