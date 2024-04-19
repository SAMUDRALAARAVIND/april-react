import axios from "axios";
import { useEffect, useState } from "react";

// 0 1(pending) 2(success) 3(error)
const ShowFollowers = ({ setIsUserLoggedIn }) => {
    const [followers, setFollowers] = useState({
        apiStatus: 0,
        data: null
    });

    useEffect(() => {
        // fetch all followers
        (async function () {
            try {
                setFollowers({ apiStatus: 1 })
                const token = localStorage.getItem("token");
                const response = await axios({
                    url: "https://node-auth-jwt-w78c.onrender.com/user/followers",
                    method: "GET",
                    headers: {
                        // abcd: "Rahul Srivastava"
                        Authorization: `Bearer: ${token}`
                    }
                });
                setFollowers({ apiStatus: 2, data: response.data })
            }
            catch (error) {
                setFollowers({ apiStatus: 3 })
                const statusCode = error?.response?.status;
                if (statusCode === 403 || statusCode === 401) {
                    localStorage.removeItem("token");
                    setIsUserLoggedIn(false);
                }
                console.log(error);
            }
        })();
    }, []);

    if (followers.apiStatus === 0 || followers.apiStatus === 1) {
        return <h1>Fetching Followers ...</h1>
    }

    if (followers.apiStatus === 3) {
        return <h1>Error occured</h1>;
    }

    return (
        <div>
            <h2>Your followers will be shown below: </h2>
            {
                followers.data.map(follower => {
                    return <p>{follower.name}</p>
                })
            }
        </div>
    );
}

export default ShowFollowers;