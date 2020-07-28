import React from "react";
import "../App.css";
import Me from "../img/noahfranco.png";
import BackgroundPhoto from "../img/code.png";
import { Link } from "react-router-dom";
import { TopContent, SubTitle, ReplaceHover } from "./Style.js";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1a191b",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="background"
          src={BackgroundPhoto}
          alt="screenshot of code"
        />
      </div>
      <TopContent>
        <ReplaceHover>
          <img className="img" src={Me} alt="noah franco" />
        </ReplaceHover>
        <div className="Small-Space"> </div>
        <div className="title"> Noah Franco </div>
        <div className="Small-Space"> </div>
        <div className="sub-title"> Full Stack Developer </div>
        <div className="Small-Space"> </div>
        <Link to="/projects">
          <div className="Button-Hover">View Projects</div>
        </Link>
        <div className="More-Space"> </div>
        <div className="SocialLinks">
          <a
            href="https://www.linkedin.com/in/noahfranco/"
            target="_blank"
            className="NoColor"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
          <div className="Small-Space"> </div>
          <a
            href="https://github.com/noahfranco"
            target="_blank"
            className="NoColor"
          >
            {" "}
            <FaGithub />{" "}
          </a>
          <div className="Small-Space"> </div>
          <a
            href="https://twitter.com/noahfranco_"
            target="_blank"
            className="NoColor"
          >
            {" "}
            <FaTwitter />{" "}
          </a>
        </div>
      </TopContent>
    </>
  );
};

export default Home;

// target="_blank"
