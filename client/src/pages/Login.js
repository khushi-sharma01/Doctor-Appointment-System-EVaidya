import React from "react";
import "../styles/RegiserStyles.css"; // Assuming the correct path to your CSS file
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <div className="center-container">
      <div className="row">
        <div className="col-6">
          <img
            className="loginsideimg "
            src="https://static.vecteezy.com/system/resources/previews/000/662/016/original/doctors-group-happy-medical-team-vector.jpg"
          ></img>
        </div>
        <div className="col-6">
          <div className="form-container">
            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              className="register-form"
            >
              <h3 className="text-center" style={{ fontFamily: "Austin" }}>
                LOGIN{" "}
              </h3>

              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <Link to="/register" className="m-2">
                Not a user? Register here
              </Link>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
