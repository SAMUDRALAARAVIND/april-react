// REST Endpoints 
const baseUrl = 'http://localhost:8080'; // "https://node-auth-jwt-w78c.onrender.com";
const endpoints = {
    login: `${baseUrl}/auth/login`,
    signup: `${baseUrl}/auth/signup`,
    userInfo: `${baseUrl}/user/info`,
    postsList: `${baseUrl}/post/all`,
    createPost: `${baseUrl}/post/create`,
    commentsList: `${baseUrl}/post/comments`,

    followersList: `${baseUrl}/user/followers`,
    followingsList: `${baseUrl}/user/following`,
    suggestionsList: `${baseUrl}/user/suggestions`,
    follow: `${baseUrl}/user/follow`,
    unfollow: `${baseUrl}/user/unfollow`
}

export default endpoints