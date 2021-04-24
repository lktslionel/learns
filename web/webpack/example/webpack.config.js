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

/**
 * PRESETS
 */

// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpackMerge = require("webpack-merge");

// const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
// const presetConfig = require("./build-utils/loadPresets");

// module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
//   return webpackMerge(
//     {
//       mode,
//       module: {
//         rules: [
//           {
//             test: /\.jpe?g$/,
//             use: [
//               {
//                 loader: "url-loader",
//                 options: {
//                   limit: 5000
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       output: {
//         filename: "bundle.js"
//       },
//       plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
//     },
//     modeConfig(mode),
//     presetConfig({ mode, presets })
//   );
// };