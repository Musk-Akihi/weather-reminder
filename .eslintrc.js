module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended', // 使用推荐的eslint
    'plugin:prettier/recommended', // 使用插件支持prettier
    'prettier' // eslint-config-prettier 的缩写，eslint兼容的插件
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'prettier' // eslint-plugin-prettier 的缩写
  ],
  rules: {
    'prettier/prettier': ['error'],
    semi: ['warn', 'never'], // 禁止尾部使用分号
    'no-console': 0, // 允许console
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // production不允许有debugger
    'no-duplicate-case': 'warn', // 禁止出现重复case
    'no-empty': 0, // 允许出现空语句块
    'no-func-assign': 'off', // 允许对Function声明重新赋值
    'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
    'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
    'no-multi-spaces': 'warn', // 禁止使用多个空格
    // 'no-case-declarations': 'off', // 无案例声明
    'no-redeclare': 'warn', // 禁止多次声明同一变量
    'no-return-assign': 'warn', // 禁止在return语句中使用赋值语句
    'no-return-await': 'warn', // 禁用不必要的[return/await]
    'no-self-compare': 'warn', // 禁止自身比较表达式
    'no-useless-catch': 'warn', // 禁止不必要的catch子句
    'no-useless-return': 'warn', // 禁止不必要的return语句
    'no-mixed-spaces-and-tabs': 'warn', // 禁止空格和tab的混合缩进
    'no-multiple-empty-lines': 'warn', // 禁止出现多行空行
    'no-trailing-spaces': 'warn', // 禁止一行结束后面不要有空格
    'no-useless-call': 'warn', // 禁止不必要的.call()和.apply()
    'no-var': 'warn', // 禁止出现var用let和const代替
    'no-delete-var': 'off', // 允许出现delete变量的使用
    'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
    'no-prototype-builtins': 'off', // 允许Object.prototype直接在对象上调用某些方法
    'dot-notation': 'warn', // 要求尽可能地使用点号
    'default-case': 'warn', // 要求switch语句中有default分支
    eqeqeq: 'warn', // 要求使用 === 和 !==
    curly: 'warn', // 要求所有控制语句使用一致的括号风格
    'space-before-blocks': 'warn', // 要求在块之前使用一致的空格
    'space-in-parens': 'warn', // 要求在圆括号内使用一致的空格
    'space-infix-ops': 'warn', // 要求操作符周围有空格
    'space-unary-ops': 'warn', // 要求在一元操作符前后使用一致的空格
    'switch-colon-spacing': 'warn', // 要求在switch的冒号左右有空格
    'arrow-spacing': 'warn', // 要求箭头函数的箭头前后使用一致的空格
    'array-bracket-spacing': 'warn', // 要求数组方括号中使用一致的空格
    'brace-style': 'warn', // 要求在代码块中使用一致的大括号风格
    // camelcase: 'warn', // 要求使用骆驼拼写法命名约定
    'max-depth': ['warn', 5], // 要求可嵌套的块的最大深度5
    'max-statements': ['warn', 100], // 要求函数块最多允许的的语句数量100
    'max-nested-callbacks': ['warn', 5], // 要求回调函数最大嵌套深度5
    'max-statements-per-line': ['warn', { max: 1 }], // 要求每一行中所允许的最大语句数量
    quotes: ['warn', 'single', 'avoid-escape'], // 要求统一使用单引号符号
    'no-unused-vars': 0 // 允许未使用的变量
  }
}
