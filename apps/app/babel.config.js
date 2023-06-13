module.exports = function (api) {
  process.env.EXPO_ROUTER_APP_ROOT = __dirname + '/src/app';

  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      require.resolve('expo-router/babel'),
      [
        'transform-inline-environment-variables',
        {
          include: ['EXPO_ROUTER_APP_ROOT'],
        },
      ],
    ],
  };
};
