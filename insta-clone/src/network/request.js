
/**
 * httpConfig => defines the request data
 * 
 * {
 *  url: "",
 *  method: "",
 *  data?: "",
 *  params?: "",
 * }
 */

import axios from "axios";

const request = async (httpConfig) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios({
            url: httpConfig.url,
            method: httpConfig.method,
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });

        return { success: true, data: response.data }
    }
    catch (error) {
        return { success: false, data: "Some error occured" }
    }
}

export default request