var webpack = require("webpack")
var path = require("path")

process.noDeprecation = true

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, 'dist', 'assets'),
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					"presets": ["@babel/preset-env", "@babel/preset-react"]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader', {
				loader: 'postcss-loader',
				options: {
					plugins: () => [require('autoprefixer')]
				}}]
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]	
}
