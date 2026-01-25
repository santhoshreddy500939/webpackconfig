
const path = require("path");
module.exports={
    mode:"development",
   
  module: {
    rules: [
       {
        test: /\.css$/, // Targets css files
        use: ['style-loader','css-loader']
      }
      ,
       {
        test: /\.scss$/, // Targets scss files
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 9000,
    devMiddleware:{
        writeToDisk:true
    }
  },

    
  
}