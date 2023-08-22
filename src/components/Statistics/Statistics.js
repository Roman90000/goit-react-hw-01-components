import { StatisticsList } from "./StatisticsList";
import { Container, Title, List, BoxUl } from "./Statistics.styled";






export const Statistics = ({items}) => {
    return  <Container>
        <Title>Upload stats</Title>
            <BoxUl>
                <List>{items.map(item =>
                    <StatisticsList item={item} />
                )}</List>
            </BoxUl>
            </Container>
};
