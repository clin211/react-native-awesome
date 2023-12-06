module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@': './src',
                    '@/components': './src/components',
                    '@/utils': './src/utils',
                    '@/assets': './src/assets',
                    '@/screens': './src/screens',
                    '@/service': './src/services',
                    '@/hooks': './src/hooks',
                    '@/types': './src/types',
                    '@/store': './src/store',
                    '@/language': './src/language',
                },
            },
        ],
    ],
};
