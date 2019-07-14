import request from './requests';

const Api = {
    list: async endpoint => await request.get(endpoint),
    get: async (endpoint, id) => await request.get(`${endpoint}/${id}`),
    add: async (endpoint, data) => await request.post(endpoint, data)
};

export default Api;
