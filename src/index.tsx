import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./layouts/scrollTop/ScrollTop";

import { worker } from "./api/browser";

// 개발 환경에서만 MSW 실행
// if (process.env.NODE_ENV === "development") {
worker.start({
  onUnhandledRequest: "bypass", // 모킹하지 않은 요청은 브라우저 통과
});
// worker.start();
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
