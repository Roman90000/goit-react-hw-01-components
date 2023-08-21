import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { TransactionHistory } from "./TransactionItems/TransactionHistory";


export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
