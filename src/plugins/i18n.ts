import { createI18n } from 'vue-i18n'
import locales from '../locales'

const i18n = createI18n({
  locale: '中文简体',
  fallbackLocale: '中文简体',
  messages: locales,
})

export default i18n
