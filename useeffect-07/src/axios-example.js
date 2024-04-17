import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";


const AxiosExample = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch("https://api.postalpincode.in/pincode/506163", {method: "", headers: , body: JSON})
        //     .then(response => response.json())
        //     .then(data => setData(data))
        //     .catch(err => setData("error"))
        axios({
            url: "https://api.postalpincode.in/pincode/506163",
            method: "GET",
        }).then(response => {
            console.log(response);
            setData(response.data);
        })
            .catch(error => {
                console.log(error);
            })
    }, []);

    if (data === "error") return <p>Error occured</p>;

    if (!data) return <p>Loading ...</p>

    return <p>{JSON.stringify(data)}</p>
}

export default AxiosExample;