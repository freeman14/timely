// The values provided below are the defaults.
// If you don't specify one of these properties,
// the default value will be applied.
module.exports = {
  printWidth: 140,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid', // other option 'always'
  parser: 'typescript',
  endOfLine: 'lf',
  overrides: [
    {
      files: 'src/app/**/*.json',
      options: {
        parser: 'json'
      }
    },
    {
      files: 'src/app/**/*.html',
      options: {
        parser: 'angular'
      }
    },
    {
      files: 'src/app/**/*.scss',
      options: {
        parser: 'scss'
      }
    }
  ]
};
