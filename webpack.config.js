const path = require('path');

module.exports = {
    entry: './movies/static/src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'movies/static/dist')
    }
};
