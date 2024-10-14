import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import unpluginAutoImport from 'unplugin-auto-import/rspack'
import unpluginVueComponent from 'unplugin-vue-components/rspack'
import { VuetifyPlugin } from 'webpack-plugin-vuetify'
import { authReqBaseUrl, coreReqBaseUrl } from './src/config/constant'

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    proxy: {
      '/api/core': {
        target: coreReqBaseUrl,
        changeOrigin: true,
        pathRewrite: { '^/api/core': '' },
      },
      '/api/auth': {
        target: authReqBaseUrl,
        changeOrigin: true,
        pathRewrite: { '^/api/auth': '' },
      },
    },
  },
  tools: {
    rspack: {
      plugins: [
        unpluginAutoImport({
          include: [
            /\.vue$/,
            /\.vue\?vue/,
            /\.ts$/,
          ],
          imports: [
            'vue',
            'vue-router',
            '@vueuse/core',
          ],
          dts: './src/types/auto-imports.d.ts',
        }),
        unpluginVueComponent({
          dirs: ['src/components'],
          extensions: ['vue'],
          dts: './src/types/components.d.ts',
        }),
        new VuetifyPlugin({ autoImport: true }),
      ],
    },
  },
  html: {
    title: 'rspack-vue-base',
  },
})
