import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user => Axios.post('/user', user);
const deleteUser = id => Axios.delete('/user', { params: { id } });
const updateUser = user => Axios.put('/user', user);

export { getUsers, createUser, deleteUser, updateUser };
