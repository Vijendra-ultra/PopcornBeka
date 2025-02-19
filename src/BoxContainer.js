import React, { Children } from "react";

import "./styles/MovieHolder.css";
export default function BoxContainer({ children }) {
  return <div className="container">{children}</div>;
}
