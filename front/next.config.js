const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
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
}
