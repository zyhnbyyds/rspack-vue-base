import type { ComponentResolverFunction } from 'unplugin-vue-components'
import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import unpluginAutoImport from 'unplugin-auto-import/rspack'
import unpluginVueComponent from 'unplugin-vue-components/rspack'

function lewUiResolver(): ComponentResolverFunction {
  return (name: string) => {
    if (name.match(/^(Lew[A-Z]|Lew-[a-z])/)) {
      return {
        name,
        from: 'lew-ui',
      }
    }
  }
}

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        unpluginAutoImport({
          include: [
            /\.vue$/,
            /\.vue\?vue/,
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
          resolvers: [lewUiResolver()],
        }),
      ],
    },
  },
  html: {
    title: 'rspack-vue-base',
  },
})
