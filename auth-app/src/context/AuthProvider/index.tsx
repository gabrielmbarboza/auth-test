import React, {createContext, useEffect, useState} from 'react';
import {IAuthProvider, IContext, IUser} from './types';
import { LoginRequest } from '../../services/authentication';
import { setUserCookies, getUserCookies } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserCookies();

    if(user) setUser(user);
  }, []);

  async function login(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const userContext = { token: (response as IUser).token, email };

    setUser(userContext)
    setUserCookies(userContext);
  }

  function logout() {
    setUser(null);
    setUserCookies(null);
  }

  return (
    <AuthContext.Provider value={{...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
