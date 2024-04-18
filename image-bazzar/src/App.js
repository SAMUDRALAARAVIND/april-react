import ImagesList from "./components/ImagesList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./app.scss";
import { useEffect, useState } from "react";
import axios from "axios";
/**
 *  apiStatus: 0
 *             1 ( pending )
 *             2 ( success )
 *             3 ( error )
 */

const clientId = "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U";

const ImageBazzarApp = () => {
    const [query, setQuery] = useState('nature');
    const [pageNumber, setPageNumber] = useState(1);
    const [response, setResponse] = useState({ apiStatus: 0, data: null });

    const isLoading = response.apiStatus === 1;

    const onSearch = () => {
        // fetch data for the query and pageNumber
        if (pageNumber === 1) {
            // if already the pageNumber is 1 then just call the api without updating the pageNumber
            fetchData();
        }
        else setPageNumber(1);
    }

    const fetchData = async () => {
        try {
            setResponse({ ...response, apiStatus: 1 });
            const serverResponse = await axios(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=${clientId}`);
            setResponse({ data: serverResponse.data, apiStatus: 2 })
        }
        catch (error) {
            setResponse({ ...response, apiStatus: 3 });
        }
    };

    useEffect(() => {
        // fetch data with default query and default page number
        fetchData();
    }, [pageNumber]);

    return (
        <div className="app">
            <SearchBar isLoading={isLoading} onChangeText={(e) => setQuery(e.target.value)} onSearch={onSearch} />
            <ImagesList data={response.data} apiStatus={response.apiStatus} />
            <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                isLoading={isLoading}
            />
        </div>
    );
}

export default ImageBazzarApp;