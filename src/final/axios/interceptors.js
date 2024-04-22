import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'http://192.168.2.55:8080/',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'department/getAll';
    console.log('request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
