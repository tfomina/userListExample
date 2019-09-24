import Axios from 'axios';

const createUser = user =>  Axios.post('/user', user); //TODO typeof user => object;

export {
    createUser
}
