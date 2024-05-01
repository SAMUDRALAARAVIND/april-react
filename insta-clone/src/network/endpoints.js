// REST Endpoints 
const baseUrl = "http://localhost:8080"; // "https://node-auth-jwt-w78c.onrender.com";
const endpoints = {
    login: `${baseUrl}/auth/login`,
    signup: `${baseUrl}/auth/signup`,
    userInfo: `${baseUrl}/user/info`,
    postsList: `${baseUrl}/post/all`
}

export default endpoints