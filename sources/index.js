import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const deleteUser = firstName =>
  Axios.delete('/user', { params: { firstName } });

export { getUsers, createUser, deleteUser };
