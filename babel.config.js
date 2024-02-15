module.exports = function (api) {
  api.cache(true);
  const disableImportExportTransform = true;

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          native: {
            disableImportExportTransform,
          },
          web: {
            disableImportExportTransform,
          },
        },
      ],
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@images': './assets/images',
            '@src': './src',
            '@components': './src/components',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
