import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    base: process.env.VITE_APP_MICRO_URL,
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        input: 'src/main.ts',
        preserveEntrySignatures: 'strict',
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '~',
          replacement: resolve('src'),
        },
      ],
    },
    plugins: [
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle',
            },
          }),
        ],
      }),
      Vue({
        template: {
          transformAssetUrls: {
            base: '/src',
          },
        },
      }),
      Pages({
        routeBlockLang: 'yaml',
      }),
      Layouts(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
      }),
      Components({
        dts: true,
      }),
    ],
    server: {
      fs: {
        strict: true,
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
    },
  })
}
