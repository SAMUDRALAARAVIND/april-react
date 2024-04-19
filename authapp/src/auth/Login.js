import axios from "axios";

const Login = ({ setIsUserLoggedIn }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await axios({
                url: "https://node-auth-jwt-w78c.onrender.com/auth/login",
                method: "POST",
                data: { email, password }
            });
            localStorage.setItem("token", response.data.token);
            setIsUserLoggedIn(true);
        }
        catch (error) {
            alert("An eerror occured")
        }
    }
    return <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" name="email" required />
        <input placeholder="Password" name="password" required />
        <button>Login</button>
    </form>
}

export default Login;