const path = require('path');
module.exports = {
	entry: {
		main: './src/scripts/index.js',
		vendor: './src/scripts/vendor/vendor.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(svg|png|jpg|git)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs',
					},
				},
			},
		],
	},
};
