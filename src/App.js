import React from 'react';
import Users from './Users';
import { UsersProvider } from './usersContext';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
