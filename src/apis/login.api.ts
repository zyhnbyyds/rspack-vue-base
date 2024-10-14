import type { ApiResult } from './request'
import { authReq } from './request'

export function apiSendVerifyCode(email: string) {
  return authReq<ApiResult>('/auth/sendEmailCode', { method: 'post', body: { email } })
}
