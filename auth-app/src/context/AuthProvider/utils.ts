import Cookies from "js-cookie";
import { IUser } from "./types";

export function setUserCookies(user: IUser | null) {
  const oneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
  Cookies.set('user', JSON.stringify(user), { expires: oneMinute });
};

export function getUserCookies() {
  const storagedUser = Cookies.get('user');

  if(!storagedUser) return null

  return JSON.parse(storagedUser) || null;
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user));
};

export function getUserLocalStorage() {
  const storagedUser = localStorage.getItem('user');

  if(!storagedUser) return null

  return JSON.parse(storagedUser) || null;
}
