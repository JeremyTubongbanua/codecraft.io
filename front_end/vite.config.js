import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@uiw/react-textarea-code-editor'],
      output: {
        globals: {
          '@uiw/react-textarea-code-editor': 'ReactTextareaCodeEditor'
        }
      }
    }
  }
});