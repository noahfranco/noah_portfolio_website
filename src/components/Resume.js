import React from "react";
import NavBar from "./NavBar.js";
import "../App.css";

const Resume = () => {
  return (
    <>
      <NavBar />
      <div className="Pdf-content">
        <iframe
          className="Pdf"
          style={{
            position: "absolute",
            height: "80%",
            border: "none",
          }}
          src="https://cdn.shopify.com/s/files/1/0411/3865/1293/files/Noah_Franco_Resume.pdf?v=1593441188"
          title="Noah Franco's Resume"> </iframe>
      </div>
    </>
  );
};

export default Resume;
