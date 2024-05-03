
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
            ...(httpConfig.data && { data: httpConfig.data }),
            ...(httpConfig.params && { params: httpConfig.params }),
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