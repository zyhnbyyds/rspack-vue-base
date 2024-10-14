import { TokenKey } from '../config/constant'

export function getToken() {
  return localStorage.getItem(TokenKey)
}
