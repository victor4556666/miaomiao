import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 3000,
    headers: {
        'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"170901071910363756085249","bc":"110100"}'
    }
});
http.interceptors.request.use(function (config) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true
    });
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.clear()
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear()
    return Promise.reject(error);
});

export default http