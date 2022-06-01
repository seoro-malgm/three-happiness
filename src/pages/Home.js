import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { api } from "../plugins/api";

const SubmitForm = () => {
  const [input, setValues] = useState({ date: "2022-06-15", first: "", second: "", third: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...input, [name]: value });
    console.log("%cHome.js line:10 input", "color: #007acc;", input);
  };

  const handleSubmit = async (evt) => {
    setSubmitting(true);
    evt.preventDefault();
    const data = await api.postItem(input);
    if (data.id) {
      window.alert("업로드가 완료됐습니다");
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ul className="form-items">
        <li className="form-item">
          <input className="form-input" type="date" disabled={submitting} name="date" value={input.date} placeholder="날짜" onChange={handleChange} />
        </li>
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

const ListItems = (props) => {
  const { items } = props;
  return (
    <ul className="list-happiness">
      {items.map((item, i) => {
        return (
          <li key={i}>
            <small>{item.date}</small>
            <hr />
            <div>{item.first}</div>
            <div>{item.second}</div>
            <div>{item.third}</div>
          </li>
        );
      })}
    </ul>
  );
};

export const Home = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const items = await api.getItems();
      if (items) {
        setItems(items);
      }
      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <div className="form-wrap">
          <header>
            <h2>하루의 세가지 복, 삼복</h2>
            <span>매일 기분좋았던 일, 행복했던 일을 세 가지씩 적어봅시다!</span>
          </header>
          <SubmitForm />
        </div>
        <div className="">
          {items && items.length ? (
            <div>
              <ListItems items={items}></ListItems>
            </div>
          ) : (
            <div>...</div>
          )}
        </div>
      </Container>
    </div>
  );
};
