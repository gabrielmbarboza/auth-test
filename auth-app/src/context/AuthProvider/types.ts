export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
