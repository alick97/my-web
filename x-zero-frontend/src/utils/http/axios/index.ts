import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": 'application/json',
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
          const { status, data } = error.response;
          switch (status) {
            case 400:
              console.error('Bad Request:', data.message);
              break;
            case 401:
              console.error('Unauthorized, please login again');
              // Optional: Redirect to login (cookie is managed by backend)
              if (window.location.pathname != '/login') {
                  window.location.href = '/login';
              }
              break;
            case 403:
              console.error('Forbidden:', data.message);
              break;
            case 404:
              console.error('Not Found:', data.message);
              break;
            case 500:
              console.error('Server Error:', data.message);
              break;
            default:
              console.error('Unexpected Error:', data.message);
          }
        } else if (error.request) {
          console.error('No Response Received:', error.request);
        } else {
          console.error('Error:', error.message);
        }
        return Promise.reject(error);
      }
);

export default axiosInstance;
