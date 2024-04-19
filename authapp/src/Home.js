import { useState } from "react"
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ShowFollowers from "./ShowFollowers";

const Auth = ({ setIsUserLoggedIn }) => {
    const [showLogin, setShowLogin] = useState(true);

    return <div>
        {showLogin ? <Login setIsUserLoggedIn={setIsUserLoggedIn} /> : <Signup />}
        <button onClick={() => setShowLogin(!showLogin)}>Toggle form</button>
    </div>
}

const Home = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));
    return (<>
        {
            !isUserLoggedIn ? <Auth setIsUserLoggedIn={setIsUserLoggedIn} /> : <ShowFollowers setIsUserLoggedIn={setIsUserLoggedIn} />
        }
    </>)
}

export default Home;