import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  messages,
})
// @ts-expect-error for without vue context
export const getTranslator = () => i18n.global.t

export const install: UserModule = ({ app }) => {
  app.use(i18n)
}
