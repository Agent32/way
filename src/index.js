import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ========================================
const dialogsMain = [
  {
    id: 1,
    name: "Борян",
    path: "/massage/test",
    userDialogs: ["Еп, никитин баланс", "Калаш с отдачей ХК?", "мы абузим"],
  },
  {
    id: 2,
    name: "Саня",
    path: "/massage/test2",
    userDialogs: [
      "Объявляю крестовый поход на Харьков",
      "Ну отслужил и иди на пограмиста",
      "Это и есть прогрессивный налог",
    ],
  },
];
// ========================================
const postsWall = [
  {
    avatarImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
    text: "I hate my life",
    date: "27.01.21",
    likes: 2,
  },
  {
    avatarImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
    text: "Fuck de system",
    date: "23.02.21",
    likes: 5,
  },
];
// ========================================
const dataMass = [
  "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
  "Anon",
  "2 jan",
  "Minsk",
  "HNAGH-11",
  "https://learn.javascript",
];

// ========================================

ReactDOM.render(
  <React.StrictMode>
    {}
    <App dataMass={dataMass} postsWall={postsWall} dialogsMain={dialogsMain} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
