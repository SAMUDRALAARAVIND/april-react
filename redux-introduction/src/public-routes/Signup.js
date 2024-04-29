import { Form, Input, Button, Radio } from "antd";
import "./form.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import endpoints from "../network/endpoints";

const Signup = () => {
    const navigate = useNavigate();

    const signup = (data) => {
        axios({
            url: endpoints.signup,
            method: "POST",
            data
        })
            .then(response => {
                alert("Signup success");
                navigate("/login");
            })
            .catch(error => {
                alert("Error occured, please try again");
            })
    }

    return (
        <div className="form-container">
            <Form className="form" layout="vertical" onFinish={signup}>
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
                        { required: true, message: "Password is required" }
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Form.Item label="Name" name="name" rules={[{ required: true, message: "Name is required" }]}>
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item label="Select Gender" name="gender" rules={[{ required: true, message: "Gender is required" }]}>
                    <Radio.Group>
                        <Radio value="MALE">Male</Radio>
                        <Radio value="FEMALE">Female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="City" name="city" rules={[{ required: true, message: "City is required" }]}>
                    <Input placeholder="Enter your city" />
                </Form.Item>
                <Button style={{ margin: "20px 0" }} block htmlType="submit">Signup</Button>
                <p>Already have an account ? <Link to="/login">Sign in</Link></p>
            </Form>
        </div>
    )
}

export default Signup;