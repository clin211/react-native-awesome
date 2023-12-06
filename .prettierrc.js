module.exports = {
  semi: true, // 句末加分号
  tabWidth: 4, // 缩进字节数
  printWidth: 100, // 超过最大值换行
  singleQuote: true, // 使用单引号代替双引号
  bracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  useTabs: false, // 缩进不使用tab，使用空格
  parser: 'typescript', // 格式化的解析器，默认是babylon
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
};
