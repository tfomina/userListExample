import Axios from 'axios';

const getList = queryParams => Axios.get('/list', { params: queryParams } );

export { getList };
