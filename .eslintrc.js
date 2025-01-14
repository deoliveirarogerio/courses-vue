module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};