const path = require('path');
const folder = path.resolve(__dirname, 'dist');


const config = {
    name: 'main',
    entry: {
        'webpack-bundle': './src/index.js'
    },
    output: {
        path: folder
    }
};

module.exports = config;
