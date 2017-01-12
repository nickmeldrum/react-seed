'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [ 
        './src/index'
    ],
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
}

