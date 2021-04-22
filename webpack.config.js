const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
	  },
	  {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
};
