import { ofetch } from 'ofetch'

export const authReq = ofetch.create({
  timeout: 20000,
  retry: 3,
  retryDelay: 300,
  baseURL: '/api/auth',
})

export const coreReq = ofetch.create({
  timeout: 20000,
  retry: 3,
  retryDelay: 300,
  baseURL: '/api/core',
})

export interface ApiResult<T = object> {
  code: number
  data?: T
  msg: string
}
