import React, { useState } from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import { api } from "../plugins/api";

const LoginForm = () => {
  const [token, setToken] = useState(null);
  const [input, setValues] = useState({ email: "test@email.com", password: "!2password" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...input, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const user = await api.getToken(input);
    if (user) {
      Login(user);
    }
    setSubmitting(false);
  };

  const Login = (user) => {
    const { accessToken } = user;
    window.sessionStorage.setItem("three-happiness-token", accessToken);
    setToken(accessToken);
  };

  return token ? (
    <Navigate to="/" replace={true} />
  ) : (
    <form onSubmit={handleSubmit} noValidate>
      <ul className="form-items">
        <li className="form-item">
          <input
            className="form-input"
            type="email"
            disabled={submitting}
            name="email"
            value={input.email}
            placeholder="이메일"
            onChange={handleChange}
          />
        </li>
        <li className="form-item">
          <input
            className="form-input"
            type="password"
            disabled={submitting}
            name="password"
            value={input.password}
            placeholder="패스워드"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button type="submit" disabled={submitting}>
        {submitting ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
};

export const Login = () => {
  return (
    <div>
      <Container maxWidth="md">
        <div className="form-wrap">
          <header>
            <h2>로그인</h2>
          </header>
          <LoginForm></LoginForm>
        </div>
      </Container>
    </div>
  );
};
