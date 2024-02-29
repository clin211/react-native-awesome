module.exports = {
    root: true,
    extends: '@react-native',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            rules: {
                // 检查 Hook 的规则
                'react-hooks/rules-of-hooks': 'error',
                // 检查 effect 的依赖
                'react-hooks/exhaustive-deps': 'warn',
                'react/jsx-uses-react': 'off',
                'react/react-in-jsx-scope': 'off',
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-bitwise': 0,
                'prefer-const': 'warn',
                'comma-dangle': ['error', 'always-multiline'],
                // 不能在class以外使用this
                'class-methods-use-this': 0,
                // 注释和代码不能在同一行
                'no-inline-comments': 'error',
                // 允许使用 单引号和es6的``
                quotes: ['error', 'single', {allowTemplateLiterals: true}],
                // 不允许使用var
                'no-var': 2,
                // 禁止分号前后有空格
                'semi-spacing': 2,
                // 在 | & 符号中,强制加空格
                'flowtype/union-intersection-spacing': [2, 'always'],
                // 允许使用行内样式
                'react-native/no-inline-styles': 0,
                'react/no-unescaped-entities': 0,
            },
        },
    ],
};
