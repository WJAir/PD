import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://a.airy.ink:9000',
  timeout: 5000, // 设置超时时间为5秒钟
});

// 在请求被发送之前，对请求进行一些处理
instance.interceptors.request.use(
  config => {
    // 在请求头中添加token等信息
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 在响应返回之前，对响应进行一些处理
instance.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          // 返回401错误，说明token验证失败，需要重新登录
          break;
        case 404:
          // 返回404错误，说明请求的接口不存在
          break;
        default:
          // 其他错误，可以根据需要进行处理
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

export default instance;
