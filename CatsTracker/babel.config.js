module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'jest'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        cwd: 'babelrc',
        alias: {
          '@assets': './assets',
          '@components': './src/components/',
          '@constants': './src/constants/index.ts',
          '@services': './src/services/',
          '@screens': './src/screens/',
          '@helpers': './src/helpers',
          '@icons': './assets/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@state': './src/state/',
          '@enhancers': './src/enhancers/index.ts',
          '@middlewares': './src/middlewares/index.ts',
          '@utils': './src/utils/index.ts',
        },
      },
    ],
  ],
};
