import type { RegisterRes } from './interface'
import type { ApiResult } from './request'
import { authReq } from './request'

export function apiSendVerifyCode(email: string) {
  return authReq<ApiResult>('/auth/sendEmailCode', { method: 'post', body: { email } })
}

export function apiRegisterUseEmail(email: string, code: string) {
  return authReq<ApiResult<RegisterRes>>('/auth/loginUseEmail', { method: 'post', body: { email, code } })
}
