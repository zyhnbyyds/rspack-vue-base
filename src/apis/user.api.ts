import { coreReq } from './request'

export function doGetUserList() {
  return coreReq('/core/user')
}
