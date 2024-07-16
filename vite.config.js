import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    } // alias 파일시스템 경로에 별칭을 만들 때 사용 @가 src가 되는 것이므로 각 vue파일 안에 @로 경로를 설정할 수 있다.
  }
})
