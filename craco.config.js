const path = require('path');
const { whenProd } = require('@craco/craco');
const cssnano = require('cssnano');
const {
  compilerOptions: { paths },
} = require('./tsconfig.json');

const pxtorem = require("postcss-pxtorem");

module.exports = {
  webpack: {
    // Set them your alias in the tsconfig.json
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace('/*', '')]: path.resolve(
          __dirname,
          'src',
          paths[alias][0].replace('/*', '')
        ),
      }),
      {}
    ),
  },
  style: {
    postcss: {
      loaderOptions: () => {
        const obj = {
          postcssOptions: {
            ident: 'postcss',
          }
        }
        return obj;
      }
    }
  },
  jest: {
    configure: {
      // Set them your alias in the tsconfig.json
      moduleNameMapper: Object.keys(paths).reduce(
        (all, alias) => ({
          ...all,
          [alias.replace('/*', '/(.*)')]: path.join(
            '<rootDir>/src/',
            paths[alias][0].replace('/*', '/$1')
          ),
        }),
        {}
      ),
    },
  },
};
