module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "no-console": 'off', // 打開 console 功能
    'no-debugger': 'off',　 // 關閉 debugger 功能
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "semi": false
    //   }
    // ],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always", // 自閉合標籤自動加 void?? <img/>>
        "normal": "never",
        "component": "never"
      },
      "svg": "never",
      "math": "never"
    }]
  }
}
