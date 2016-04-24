const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist'];

// Set the correct environment
const env = args.env ? args.env : 'dev';

// used by webpack to know the env variable
// process.env.REACT_WEBPACK_ENV = env;

// Build the webpack configuration depending on environment variable
// defaults to dev
// Returns a Webpack config object
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'dev';
  const config = require(path.join(__dirname, `webpackConfigs/${validEnv}`));
  return config;
}
module.exports = buildConfig(env);
