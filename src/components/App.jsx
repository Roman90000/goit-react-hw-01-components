import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionItems/TransactionHistory';
import { Layout } from './Layout';
import 'modern-normalize';

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <Statistics title={'Upload stats'} items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
