// import axios from "axios";
// const apiRequest = axios.create({
//     baseURL : "https://statesphere-backend-1.onrender.com/api",
//     withCredentials: true,
// })

// export default apiRequest;



import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://statesphere-backend-1.onrender.com",
  withCredentials: true, // Send cookies with every request
});

// Intercept 401 errors to handle logout
apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default apiRequest;