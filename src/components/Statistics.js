import { StatisticsList } from "./StatisticsList";

export const Statistics = ({items}) => {
    return  <section class="statistics">
                <h2 class="title">Upload stats</h2>
                <ul class="stat-list">{items.map(item => <li key={item.id} class="item">
                    <StatisticsList item={item} />
                </li>)}</ul>
            </section>
};