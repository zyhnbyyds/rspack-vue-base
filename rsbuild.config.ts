import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import unpluginAutoImport from 'unplugin-auto-import/rspack'

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [unpluginAutoImport({
        include: [
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dts: './types/auto-imports.d.ts',
      })],
    },
  },
})
