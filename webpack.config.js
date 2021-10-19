const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production', //tipo de modulo produçao ou desenvolvimento
    entry: './src/main.ts', //arquivo inicial
    devServer: { // configra e inicializa o dev server
        static: {
          directory: path.join(__dirname, 'dist'), // os arquivos da aplicaçao 
        },
        compress: true,
        port: 9000, // a porta para o servidor de desenvolvimento
        hot: true,  // se o autoload vai estar habilitado no caso sim 
      },
    output: { // arquivo de saida aqui mostrado como um objeto contendo o nome do arquivo e o path
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist') // devido ao __dirname ele pega o caminho absoluto ate a pasta dist
    },
    plugins:[ // plugin responsavel por copiar os arquivos da pasta public para a dist
        new CopyPlugin({
            patterns: [
              { from: "public" },
            ],
         }),
    ],
    resolve:{ // define as extensoes dos arquivos o padro é .js
        extensions: ['.ts','.js']
    },
    module:{ // array de regras pra cada modelo
        rules:[{ // mostram como o build sera implementado 
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}