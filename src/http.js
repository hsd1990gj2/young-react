import axios from "axios";
export let $http = (options) => {
    let url = options.url;
    let method = (options.method || "get").toLowerCase();
    let data = options.data;
    let format = method === 'get' ? 'params' : 'data';
    let config = {
        url: url,
        method: method,
        [format]: data
    };
    return axios(config).then(res => {
        if (res && res.status && res.status === 200) {
            return res.data;
        }
    });
};
