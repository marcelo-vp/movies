import request from '../helpers/requests';

const movies = {
    get: async name => await request.get(`/search/${name}`)
};

const favorites = {
    list: async () => await request.get('/favorites'),
    add: async favorite => await request.post('/favorites', favorite)
}

export { movies, favorites };
