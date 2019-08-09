import request from './requests';

const Api = {
    list: async endpoint => await request.get(endpoint),
    get: async (endpoint, id) => await request.get(`${endpoint}/${id}`),
    add: async (endpoint, data) => await request.post(endpoint, data),
    delete: async (endpoint, id) => await request.delete(`${endpoint}/${id}`)
};

export default Api;
