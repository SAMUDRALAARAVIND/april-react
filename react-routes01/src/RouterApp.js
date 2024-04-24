import { useEffect } from "react";
import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter, useNavigate, useParams } from "react-router-dom";

const Home = () => {
    // dynamic navigation: Based on user actions navigate user conidtionally
    // static navigation: User will interact with a link for navigation.
    const navigate = useNavigate();// using navigate function we can dynamically navigate

    const productDetails = () => {
        let productId = 8993, slug = "milk";
        navigate(`/prn/${slug}/prid/${productId}`)
    }

    return <div>
        <h1>Home screen</h1>
        {/* <a href="http://localhost:3000/test">Navigate to test</a> */}
        <Link to="test">Navigate to test without slash</Link><br />
        <Link to="/test">Navigate to test with slash</Link>
        <button onClick={() => {
            true && navigate("/test")
        }}>Navigate to test page</button>

        <button onClick={productDetails}>Open Blinkit Product details</button>
    </div>
}

const ProductDetails = () => {
    debugger
    const { productSlug, productId } = useParams();

    useEffect(() => {
        // make api call for fetching the product info of productSlug and productId
        console.log(productId, productSlug)
    }, []);
    return (
        <div>
            <h2>This is product details screen</h2>
        </div>
    );
}

const RouterApp = () => {
    return (
        <div>
            <p>Hello world</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Entry Screen</h1>} />
                    <Route path="home" Component={Home} />
                    <Route path="test/:userId/:productId" element={<h1>Test screen</h1>} />
                    <Route path="prn/:productSlug/prid/:productId" Component={ProductDetails} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp;

// http://localhost:3000/home
// http://localhost:3000/test/38393
// http://localhost:3000/test/aravind
//  http://localhost:3000/test/aravind/83993


// https://blinkit.com/prn/{questionSlug}/prid/{productId}

// https://blinkit.com/cn/milk/cid/14/922
// https://blinkit.com/cn/bread-pav/cid/14/953

// https://blinkit.com/cn/{categorySlug}/cid/{categoryId}/{subCategoryId}

// react-router-dom => 