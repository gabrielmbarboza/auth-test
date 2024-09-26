import React, {createContext, useEffect, useState} from 'react';
import {IAuthProvider, IContext, IUser} from './types';
import { LoginRequest } from '../../services/authentication';
import { setUserToCookie, getUserFromCookie } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserFromCookie();

    if(user) setUser(user);
  }, []);

  async function login(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const userContext = {token: (response as IUser).token, email};

    setUser(userContext)
    setUserToCookie(userContext);
  }

  function logout() {
    setUser(null);
    setUserToCookie(null);
  }

  return (
    <AuthContext.Provider value={{...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
