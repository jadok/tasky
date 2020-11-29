module.exports = {
  webpack(config) {
    // Use ts-loader for decorators support
    for (const rule of config.module.rules) {
      if (rule.test && rule.test.test('foo.ts')) {
        rule.use = [].concat(rule.use, {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        })
      }
    }
    return config
  },
  cssModules: true,
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US'
  }
};
