import axios from 'axios';
const BASE_URL = 'https://650c769647af3fd22f67a6e1.mockapi.io/';
const api = axios.create({
  baseURL: BASE_URL,
});
const resourceApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    create: data => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const contactsApi = resourceApi('contacts');
const filtredApi = resourceApi('filtred');

export { contactsApi, filtredApi };
