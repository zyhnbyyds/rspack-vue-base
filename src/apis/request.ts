import type { FetchResponse, ResolvedFetchOptions, ResponseType } from 'ofetch'
import { ofetch } from 'ofetch'
import i18n from '../plugins/i18n'
import { router } from '../router'
import { getToken, removeToken } from '../utils/request'
import { showMsg } from '../utils/snackbar'

export const authReq = ofetch.create({
  timeout: 20000,
  retry: 1,
  retryDelay: 1000,
  baseURL: '/api/auth',

  onResponse({ response }) {
    handleOnResponse(response)
  },

  onResponseError({ response }) {
    handleOnResponseError(response)
  },

  onRequestError({ request, options, error }) {
    console.log(error, request, options)
  },
})

export const coreReq = ofetch.create({
  timeout: 20000,
  retry: 3,
  retryDelay: 300,
  baseURL: '/api/core',
  onRequest({ options }) {
    handleOnRequest(options)
  },
  onRequestError({ request, options, error }) {
    console.log(error, request, options)
  },

  onResponseError({ response }) {
    handleOnResponseError(response)
  },

  onResponse({ response }) {
    handleOnResponse(response)
  },
})

export interface ApiResult<T = object> {
  code: number
  data: T | null
  message: string
}

function handleOnRequest(options: ResolvedFetchOptions<ResponseType>) {
  const token = getToken()
  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`)
  }
}

function handleOnResponse(response: FetchResponse<ApiResult>) {
  const res = response._data
  if (res && res.code !== 0 && response.ok) {
    showMsg(res.message)
  }
}

function handleOnResponseError(response: FetchResponse<ApiResult>) {
  console.log(response.status)
  const t = i18n.global.t

  switch (response.status) {
    case 400:
      showMsg(t('http_400'))
      break
    case 403:
      showMsg(t('http_403'))
      break
    case 401:
      removeToken()
      router.push('/login')
      showMsg(t('http_401'))
      break

    case 429:
      showMsg(t('http_429'))
      break
    default:
      showMsg(t('http_500'))
      break
  }
}
