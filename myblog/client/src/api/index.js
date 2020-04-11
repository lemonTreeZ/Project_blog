import axios from "axios";
// 配置默认的参数
axios.defaults.baseURL = "http://localhost:3000";//默认访问地址
axios.defaults.withCredentials = true;//跨域允许携带cookie
// post的数据格式需要单独配置一下
axios.defaults.header.post["Content-Type"] = "application/x-www-form-urlencoded";

export default axios;