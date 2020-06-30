import React from "react";
import "../App.css";
import Navbar from "./NavBar.js";
// import axios from "axios";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <h1> Contact </h1>
        <p> </p>
      </div>
      <div className="Input">
        <form
          action="https://mailthis.to/noahfra@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input name="name" placeholder="name" type="text" />
          <div className="More-More-Space"> </div>
          <input name="email" placeholder="email" type="email" />
          <div className="More-More-Space"> </div>
          <input
            name="message"
            type="text"
            placeholder="Enter your message here"
          />
          <button className="contact-button" type="submit" value="Send">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
