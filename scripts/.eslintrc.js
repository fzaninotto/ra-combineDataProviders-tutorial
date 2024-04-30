module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    "no-unused-vars": "off",
  },
};
