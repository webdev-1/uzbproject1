import { api } from './httpRequests/axios';

export const findAll = () => {
    return api
        .get('/user')
        .then(response => response)
        .catch(error);
}