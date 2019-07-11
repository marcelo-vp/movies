import request from './requests';

const movies = {
    get: async name => await request.get(`/search/${name}`)
};

export { movies };
