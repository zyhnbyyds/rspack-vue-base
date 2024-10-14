export interface RegisterRes {
  verify: VerifyInfo
  token: string
}

export interface VerifyInfo {
  userId: string
  openId: string
}
