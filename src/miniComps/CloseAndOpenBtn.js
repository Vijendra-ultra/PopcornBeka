import React from "react";
export default function CloseAndOpenBtn({ isOpen, setIsOpen }) {
  return (
    <div className="BtnContainer">
      <button
        style={isOpen ? { fontSize: "2.5rem" } : {}}
        className="close--btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? "+" : "-"}
      </button>
    </div>
  );
}
