import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/' + require('./package.json').name + '/',
  plugins: [macrosPlugin(), reactRefresh()],
})
