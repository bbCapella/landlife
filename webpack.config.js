const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/*.php', flatten: true },
            {from: 'src/*.html', flatten: true},
            'src/.htaccess',
            {from: 'src/images', to: 'images'}
        ])
    ],
    watchOptions: {
        ignored: /node_modules/
    }
}