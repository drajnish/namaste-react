import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Admin',
    email: 'admin@namastereact.com',
  },
});

export default UserContext;
