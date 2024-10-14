import { ofetch } from 'ofetch'
import { router } from '../router'
import { getToken, removeToken } from '../utils/request'
import { showMsg } from '../utils/snackbar'

export const authReq = ofetch.create({
  timeout: 20000,
  retry: 3,
  retryDelay: 300,
  baseURL: '/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },

  onResponse({ response }) {
    const res = response._data as (ApiResult | null)
    if (res && res.code !== 0) {
      showMsg(res.message)
    }
  },
})

export const coreReq = ofetch.create({
  timeout: 20000,
  retry: 3,
  retryDelay: 300,
  baseURL: '/api/core',
  onRequest({ options }) {
    const token = getToken()
    if (token) {
      options.headers.set('Authorization', `Bearer ${token}`)
    }
  },
  onRequestError({ request, options, error }) {
    console.log(error, request, options)
  },

  onResponseError({ response }) {
    switch (response.status) {
      case 401:
        removeToken()
        router.push('/login')
        showMsg('登录已过期，请重新登录')
        break
      default:
        break
    }
  },

  onResponse({ response }) {
    const res = response._data as (ApiResult | null)
    if (res && res.code !== 0) {
      showMsg(res.message)
    }
  },
})

export interface ApiResult<T = object> {
  code: number
  data: T | null
  message: string
}
