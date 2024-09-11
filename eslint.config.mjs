import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        ...globals['cypress/globals'] 
      } 
    } 
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      cypress: cypressPlugin
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off"
    },
    env: {
      "cypress/globals": true
    },
    extends: [
      "plugin:cypress/recommended"
    ]
  }
];


