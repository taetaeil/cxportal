import App from './App.vue'
import { routes } from 'vue-router/auto-routes'

import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

// createApp(App).use(router).use(ElementPlus).mount('#app')
// , base: import.meta.env.BASE_URL
export const createApp = ViteSSG(App, { routes: setupLayouts(routes) }, (ctx) => {
  // install all modules under `modules/`
  Object.values(
    import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })
  ).forEach((i) => i.install?.(ctx))
})
