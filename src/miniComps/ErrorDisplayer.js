import React from "react";
export default function ErroDisplayer({ ErrorMessage }) {
  return (
    <>
      <p style={{ color: "#fff", fontSize: "2.4rem", textAlign: "center" }}>
        {ErrorMessage}
      </p>
    </>
  );
}
