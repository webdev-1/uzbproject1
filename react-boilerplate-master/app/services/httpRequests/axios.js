import Axios from 'axios';

export const api = Axios.create({
    BaseURL: 'http://localhost:8080',
});