module.exports = function(api) {
  api.cache(false);
  const rootImportOpts = {
    paths: [
      {
        root: __dirname,
        rootPathPrefix: '~/',
        rootPathSuffix: 'src',
      },
      {
        root: __dirname,
        rootPathPrefix: '#/',
        rootPathSuffix: 'assets',
      }
    ]
  };

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        rootImportOpts,
      ],
      [
        "module:react-native-dotenv",
        {
          allowUndefined: true,
          moduleName: "@env",
          path: ".env",
          safe: false
        }
      ]
    ]
  };
};
