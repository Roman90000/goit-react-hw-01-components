import { StatisticsList } from "./StatisticsList";

export const Statistics = ({items}) => {
    return  <section>
                <h2>Upload stats</h2>
                <ul>{items.map(item => <li key={item.id}>
                    <StatisticsList item={item} />
                </li>)}</ul>
            </section>
};