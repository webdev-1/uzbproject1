import axios from 'axios';

<<<<<<< HEAD

=======
>>>>>>> fefe5803d0585e72f9fb0d9af5ec766bc384d422
export const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const data = api.get('/user');