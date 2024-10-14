import { zhCommon } from './common'
import { zhError } from './error'
import { zhLogin } from './login'

export const zhLocale = {
  ...zhLogin,
  ...zhCommon,
  ...zhError,
}
