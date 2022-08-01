module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: ['./src/api'],
          screens: ['./src/screens'],
          components: './src/components',
          navigation: './src/navigation',
          store: './src/store',
          config: './src/config',
        },
      },
    ],
  ],
};
