/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-console': process.eventNames.NODE_ENV === 'production' ? 'error' : 'off', //프로덕션일떄는 콘솔을 사용하지 못하고 이외 환경(개발)에서는 콘솔을 사용하도록 설정.
    'vue/multi-word-component-names': 0 // multi-word error
  }
};
