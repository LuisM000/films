import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './__tests__/setup.ts',
    },
  }
})