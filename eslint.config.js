// import js from '@eslint/js'
// import pluginVue from 'eslint-plugin-vue'
// import pluginVitest from '@vitest/eslint-plugin'
// import oxlint from 'eslint-plugin-oxlint'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// export default [
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{js,mjs,jsx,vue}'],
//   },

//   {
//     name: 'app/files-to-ignore',
//     ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
//   },

//   js.configs.recommended,
//   ...pluginVue.configs['flat/essential'],
  
//   {
//     ...pluginVitest.configs.recommended,
//     files: ['src/**/__tests__/*'],
//   },
//   oxlint.configs['flat/recommended'],
//   skipFormatting,
// ]




import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  oxlint.configs['flat/recommended'],
  skipFormatting,

  {
    name: 'electron/config',
    files: ['main.js', 'preload.js'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Allow console logs for Electron debugging
    },
  },

  {
    name: 'browser-env',
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
  },
];
