import { Button, Form, Input } from "antd";
import "./form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Endpoints from "../network/endpoints";
import { useContext, useState } from "react";
import { AuthContext } from "../App";

const Login = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const { setIsLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = (data) => {
        setApiStatus("pending");
        axios({
            url: Endpoints.login,
            method: "POST",
            data
        })
            .then(response => {
                setApiStatus("success");
                const token = response.data.token;
                localStorage.setItem("token", token);
                setIsLoggedIn(true);

                // upon login success navigate the user to home page
                navigate("/")
            })
            .catch(error => {
                setApiStatus("error");
                alert("Login Failed please try again");
            })
    }

    return (
        <div className="form-container">
            <Form className="form" layout="vertical" onFinish={login}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Email is required" },
                        { type: "email", message: "Please enter a valid email" }
                    ]}
                >
                    <Input placeholder="Enter your email" name="email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Password is required" },
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Button
                    style={{ margin: "20px 0" }}
                    block
                    htmlType="submit"
                    loading={apiStatus === "pending"}
                >Login</Button>
                <p>Don't have an account ? <Link to="/signup">Signup here</Link></p>
            </Form>
        </div>
    );
}

export default Login;