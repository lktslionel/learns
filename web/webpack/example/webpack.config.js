const plugins = require('./build-utils/plugins.js');
const { merge } = require('webpack-merge');


module.exports = (env, args) => {
  return merge(
    {
      mode: "production"
    },    
    {
      mode: "development"
    },    
    {
      output: {
        filename: 'bundle.js',
      },
      plugins: [new plugins.HtmlPlugin()]
    }

  )
};