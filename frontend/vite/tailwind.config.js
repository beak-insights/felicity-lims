module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './index.html',
    './public/**/*.html',
    './src/**/*.vue',
  ],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  corePlugins: {},
  plugins: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': '150px minmax(350px, 1fr)',
      }
    }
  }
}
