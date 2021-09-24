import React from 'react';
import Profile from './Profile/profile';
import user from '../data/user.json';
import Statistics from './Statistics/statistics';
import statisticalData from '../data/statistical-data.json';
 import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';




const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />;
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
     </>
);

export default App;