import { IUser } from "./types";
import Cookies from 'js-cookie';

export function setUserToCookie(user: IUser | null) {
  const oneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
  Cookies.set('user', JSON.stringify(user), { HttpOnly: true, expires: oneMinute });
};

export function getUserFromCookie() {
  const user = Cookies.get('user');

  if(!user) return null

  return JSON.parse(user) || null;
}
