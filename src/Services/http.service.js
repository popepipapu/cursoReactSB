import _axios from "axios";

const axios = _axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    responseType: "json"
});

axios.interceptors.request.use(config => {
    console.log(
        "He lanzado una petición con la siguiente configuración: ",
        config
    );

    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("He lanzado una petición con la siguiente configuración: ", response);

    const status = response.status;
    if (status < 200 || status >= 300) {
        return Promise.reject(`Response status: ${status}`);
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error);
});

const GET = (url) => {
    return axios.get(url)
        .then(response => response.data);
}
export { GET }

const POST = (url, data) => {
    return axios.post(url, data)
      .then(response => response.data);
}
export { POST };

const PUT = (url, data) => {
    return axios.put(url, data)
      .then(response => response.data);
}
export { PUT };

const DELETE = (url) => {
    return axios.delete(url)
      .then(response => `${response.status} ${response.statusText}`);
}
export { DELETE };

const fetchProducts = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
  
    return response.json();
}
export { fetchProducts }