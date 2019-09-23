import axios from 'axios'
import store from '../store'
import router from '../router'

// 请求拦截
// Add a request interceptor
axios.interceptors.request.use((config) => {

    store.dispatch("setLoadingAsync", true)

    if (localStorage.getItem("jwtToken")) {
        config.headers.Authorization = localStorage.jwtToken;
    }

    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


// 响应拦截
// Add a response interceptor
axios.interceptors.response.use((response) => {
    store.dispatch("setLoadingAsync", false)
    // Do something with response data
    return response;
}, (error) => {
    store.dispatch("setLoadingAsync", false)

    const {
        status
    } = error.response
    if (status == 401) { // 401 表示Token已经失效
        // 提示
        alert("Token值失效,请重新登录");
        // 清除localStorage
        localStorage.removeItem("jwtToken");

        // vuex状态初始化
        store.$store.dispatch("setIsLoginAsync", false);
        store.$store.dispatch("setProfileAsync", null);
        store.$store.dispatch("setUserAsync", null);

        router.push("/login");
    }
    return Promise.reject(error);
});

export default axios;