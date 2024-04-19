import axios from "axios";

const Signup = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const gender = e.target.gender.value;
        const city = e.target.city.value;
        const name = e.target.name.value;

        try {
            const response = await axios({
                url: "https://node-auth-jwt-w78c.onrender.com/auth/signup",
                method: "POST",
                data: {
                    email,
                    name,
                    gender,
                    password,
                    city
                }
            });
            console.log(response);
        }
        catch (error) {
            alert("An eerror occured")
        }
    }

    return <form onSubmit={onSubmit}>
        <input placeholder="Enter your name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input placeholder="Password" name="password" required />
        <input placeholder="City" required name="city" />
        <select name="gender">
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
        </select>
        <button>Signup</button>
    </form>
}

export default Signup;