import * as dotenv from 'dotenv'
import path from 'path'
const { NODE_ENV } = process.env

dotenv.config()

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})