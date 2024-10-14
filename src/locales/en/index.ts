import { enCommon } from './common'
import { enError } from './error'
import { enLogin } from './login'

export const enLocale = {
  ...enLogin,
  ...enCommon,
  ...enError,
}
