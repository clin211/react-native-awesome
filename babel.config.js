module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '@': './src',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/hooks': './src/hooks',
          '@/pages': './src/pages',
          '@/theme': './src/theme',
          '@/types': './src/types',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
};
