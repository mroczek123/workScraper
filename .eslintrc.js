module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    //typescript
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    // prettier
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
