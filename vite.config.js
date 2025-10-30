import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  root: './',
  publicDir: 'public',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        // Preserve original file structure
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `img/[name].[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `fonts/[name].[hash][extname]`;
          }
          if (ext === 'css') {
            return 'css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },

    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  preview: {
    port: 8080,
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Additional SCSS options if needed
      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/animate.css/animate.min.css',
          dest: 'node_modules/animate.css',
        },
        {
          src: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
          dest: 'node_modules/@fortawesome/fontawesome-free/css',
        },
        {
          src: 'node_modules/jquery/dist/jquery.min.js',
          dest: 'node_modules/jquery/dist',
        },
      ],
    }),
  ],
});
