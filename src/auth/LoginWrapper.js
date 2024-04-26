import { lazy, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLoadingWrapper } from "../components/PageLoadingWrapper.js";
import { NotFound } from "../components/NotFound.js";
import { AuthContext } from "../App.js";
// import Login from "../public-routes/Login";
// import Signup from "../public-routes/Signup";

const Login = lazy(() => import("../public-routes/Login.js"));
const Signup = lazy(() => import("../public-routes/Signup.js"))

const LoginWrapper = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="login"
                        element={
                            <PageLoadingWrapper>
                                <Login />
                            </PageLoadingWrapper>
                        }
                    />
                    <Route
                        path="signup"
                        element={
                            <PageLoadingWrapper>
                                <Signup />
                            </PageLoadingWrapper>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return <>{children}</>;
}

export default LoginWrapper;
