import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Global, css } from "@emotion/react";
import { pretendardFont, resetStyles, investappStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${pretendardFont}
        ${resetStyles}
		${investappStyles}
      `}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
