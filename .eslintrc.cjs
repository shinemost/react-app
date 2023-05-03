/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-03 21:22:18
 * @LastEditTime: 2023-05-03 21:32:31
 * @FilePath: \react-app\.eslintrc.cjs
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/jsx-runtime"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
      "@typescript-eslint",
      "react-hooks"
  ],
  "rules": {
      // 检查 Hooks 的使用规则
    "react-hooks/rules-of-hooks": "error", 
    // 检查依赖项的声明
    "react-hooks/exhaustive-deps": "warn"
    }
}
