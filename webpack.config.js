const path = require('path');

module.exports = {
    mode: 'development',
    entry: './movies/static/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'movies/static/dist')
    }
};
