import React, { useState } from "react";
import { Container } from "@mui/material";

const SubmitForm = () => {
  const [input, setValues] = useState({ first: "", second: "", third: "" });
  const [submitting, setSubmitting] = useState(false);
  // const items = Object.keys(input);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...input, [name]: value });
    console.log("%cHome.js line:10 input", "color: #007acc;", input);
  };

  const handleSubmit = async (evt) => {
    setSubmitting(true);
    evt.preventDefault();
    // await new Promise((r) => setTimeout(r, 1000));
    setTimeout(() => {
      setSubmitting(false);
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ul className="form-items">
        <li className="form-item">
          <input
            className="form-input"
            type="text"
            disabled={submitting}
            name="first"
            value={input.first}
            placeholder="복 하나"
            onChange={handleChange}
          />
        </li>
        <li className="form-item">
          <input
            className="form-input"
            type="text"
            disabled={submitting}
            name="second"
            value={input.second}
            placeholder="복 둘"
            onChange={handleChange}
          />
        </li>
        <li className="form-item">
          <input
            className="form-input"
            type="text"
            disabled={submitting}
            name="third"
            value={input.third}
            placeholder="복 셋"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button type="submit" disabled={submitting}>
        {submitting ? "업로드 중..." : "내 오늘 행복 올리기"}
      </button>
    </form>
  );
};

export const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
        <div className="form-wrap">
          <header>
            <h2>하루의 세가지 복, 삼복</h2>
            <span>매일 기분좋았던 일, 행복했던 일을 세 가지씩 적어봅시다!</span>
          </header>
          <SubmitForm></SubmitForm>
        </div>
      </Container>
    </div>
  );
};
