import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      // 推荐加上下面这行，确保类型文件合并到 index.d.ts
      insertTypesEntry: true
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SyUiComponent',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'lib',
    target: 'es2022',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000, //警告阈值大于2000KB才提示
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
