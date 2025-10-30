import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        location: 'readonly',
        event: 'readonly',
        // Modern browser APIs
        IntersectionObserver: 'readonly',
        fetch: 'readonly',
        // jQuery
        $: 'readonly',
        jQuery: 'readonly',
        // Google Analytics
        gtag: 'readonly',
        ga: 'readonly',
        // Google Maps
        google: 'readonly',
        // Custom globals
        loadCssFromCDN: 'readonly',
        loadJsFromCDN: 'readonly',
        createCalendar: 'readonly',
        // Wedding data configuration
        WEDDING_DATA: 'readonly',
        CONFIG: 'readonly',
        // MD5 library
        MD5: 'readonly',
        // Map initialization functions (called by Google Maps callback)
        initMap: 'readonly',
        initBBSRMap: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^(init|alert_|MD5)', // Ignore callback functions and utilities
        },
      ],
      'no-console': 'off', // Allow console for this project
      'no-undef': 'error',
      'prefer-const': 'warn',
      'no-var': 'warn',
    },
  },
  {
    files: ['build-scripts.js', 'vite.config.js', 'npmfile.js'],
    languageOptions: {
      globals: {
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        Buffer: 'readonly',
      },
    },
  },
  {
    files: ['js/wedding-data.js', 'js/wedding-data.example.js'],
    languageOptions: {
      globals: {
        // Allow CommonJS module exports for wedding data
        module: 'readonly',
      },
    },
  },
  {
    files: ['service-worker.js'],
    languageOptions: {
      globals: {
        // Service Worker globals
        self: 'readonly',
        caches: 'readonly',
        fetch: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'css/**',
      'js/**/*.min.js',
      'js/jquery.fancybox.pack.js',
      'js/jquery.flexslider-min.js',
      'js/vendor/**',
      'fonts/**',
      'gulpfile.js',
    ],
  },
];
