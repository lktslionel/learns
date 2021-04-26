const plugins = require('../learns/web/webpack/webpack-workshop-2018/build-utils/plugins.js.js');
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