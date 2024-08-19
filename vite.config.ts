import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
// import VueI18n from '@intlify/vite-plugin-vue-i18n'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Inspect from 'vite-plugin-inspect'

// Elements Plus auto import 사용을 위해 추가
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// TSX 사용을 위해 추가
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      // output: {
      //   manualChunks: {
      //     'pdfjs-dist': ['pdfjs-dist'],
      //     'pdfjs-dist/build/pdf.worker': ['pdfjs-dist/build/pdf.worker'],
      //   }
      // },
      // external: ['pdfjs-dist', 'pdfjs-dist/build/pdf.worker'],
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true
      }
    }
  },

  server: {
    host: true,
    port: 8080,
    open: true,
    proxy: {
      // '/api/mock': {
      //   target: 'https://sc-ixistudio.dev-sp.violet.uplus.co.kr',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     return path.replace(/^\/api\/mock/, '')
      //   },
      // },
      //  '/api': {
      //   target: 'https://sc-igsn-studio-server.dev-sp.violet.uplus.co.kr',
      //   // target: 'https://d248a82ea6866dccd67243be01c7eef3.serveo.net',
      //   changeOrigin: true,
      // },
    }
  },

  plugins: [
    VueRouter({
      routesFolder: [
        { src: 'src/pages/', path: '' },
        { src: 'src/pages/admin/pages', path: 'mgmt/' },
        { src: 'src/pages/cqis/pages', path: 'user/' },
        { src: 'src/examples/pages', path: 'examples/' }
      ],
      // extensions: ['.vue', '.md'],
      // importMode: (filepath: string) => 'async',
      importMode: 'async'
      // extendRoute(route) {
      //   if (route.path === '/ui-examples') {
      //     route.meta = { layout: 'detail' }
      //   }
      // },
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts'
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        {
          'vue-logger-plugin': [
            'useLogger' // import { useLogger } from 'vue-logger-plugin',
          ]
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables/**', 'src/store', 'src/utils'],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()]
    }),

    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      // extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      // dirs: ["src/components", "src/view"],
      // globs: ['src/**/components/**/*.(vue|tsx|ts|js)'],
      deep: true,
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true
    }),
    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [path.resolve(__dirname, 'locales/**')],
    // }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')]
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    Vue({
      include: [/\.vue$/]
    }),
    VueDevTools()
  ],

  // // https://github.com/antfu/vite-ssg
  // ssgOptions: {
  //   script: 'async',
  //   formatting: 'minify',
  //   onFinished() {
  //     generateSitemap()
  //   },
  // },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/, /element-plus/, /quill/]
  }
})
