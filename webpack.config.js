const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const {CleanWebpackPlugin}=require("clean-webpack-plugin")
module.exports={
    mode:"development",
    entry:"./index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'./dist')
    },
  
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/, // Targets JS files
        exclude: /node_modules/,   // Do not transpile library code
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
       {
        test: /\.css$/, // Targets css files
        use: [MiniCssExtractPlugin.loader,'css-loader']
      }
      ,
       {
        test: /\.scss$/, // Targets scss files
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
        filename:"mystyle.css"
    }),

    new HtmlWebpackPlugin({
        template:"index.html"
    }),
    new CleanWebpackPlugin()

  ]
    
  
}