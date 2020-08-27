module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "space-before-function-paren": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    quotes: [1, "single"],
    semi: 0,
    "no-unused-vars": "warn", //把该条提示信息转换成警告信息
  },
};
