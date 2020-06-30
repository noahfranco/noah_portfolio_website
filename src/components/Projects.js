import React from "react";
import "../App.css";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import BackEndProjects from "./BackEndProjects.js";
import FrontIcons from "./FrontIcons.js";
import NavBar from "./NavBar.js";
import { MdWebAsset } from "react-icons/md";
import PlanfulImg from "../img/planfulImg.png";
import DiabetesImg from "../img/diabetes.png";
import RvbnbImg from "../img/rvbnbproject.png";

class Projects extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 4000,
    });
  }

  render() {
    return (
      <div>
        <NavBar />

        <FrontIcons />

        <div>
          <img
            data-aos="zoom-out-down"
            className="project-img"
            src={PlanfulImg}
            alt={"planful project"}
          />
          <h4 className="center-h3"> Planful </h4>
          <div className="content-wraper">
            <p className="center-p">
              {" "}
              The Wedding Planner Portfolio is an app built with React.js. The
              purpose of this app is to create an environment where our clients
              (wedding planners) can display their portfolio. Working on this
              project as a Front End Architect was a fantastic experience. I got
              to pair program and was part of a team with three amazing Front
              End Architects, two UI Developers, and one Back End Architect.{" "}
            </p>
          </div>
          <div className="IconWrap">
            <a
              href="https://github.com/bwj19-wedding-planner-portfolio/Front-End"
              target="_blank"
              className="black-icon"
            >
              <FaGithub className="Icon" />
            </a>
            <a
              href="https://compassionate-easley-dae0a9.netlify.com/"
              target="_blank"
              className="black-icon"
            >
              <MdWebAsset className="Icon" />
            </a>
          </div>
        </div>

        <div>
          <img
            data-aos="zoom-out-down"
            className="project-img"
            src={DiabetesImg}
          />
          <h4 className="center-h3"> Insuline Diabetes Manager </h4>
          <div className="content-wraper">
            <p className="center-p">
              {" "}
              The Insuline Diabetes Manager app is an app built with React.js
              and Redux for state management capabilities. The purpose of the
              Insuline Diabetes Manager app is to help patients predict future
              glucose levels. The Insuline Diabetes Manager team was awesome. We
              had great collaborative and problem solving skills. The team
              consisted of two UI Developers, Four Front End Architects
              including myself, one Backend Architect, and two Data Scientist.{" "}
            </p>
          </div>
          <div className="IconWrap">
            <a
              href="https://github.com/Build-Week-Diabetes-Manager/frontend"
              target="_blank"
              className="black-icon"
            >
              <FaGithub className="Icon" />
            </a>
            <a
              href="https://insuline.netlify.com/"
              target="_blank"
              className="black-icon"
            >
              <MdWebAsset className="Icon" />
            </a>
          </div>
        </div>

        <div>
          <img
            data-aos="zoom-out-down"
            className="project-img"
            src={RvbnbImg}
          />
          <h4 className="center-h3"> RVbnb </h4>
          <div className="content-wraper">
            <p className="center-p">
              {" "}
              The RVbnb app is a web application that is built with React.js.
              The purpose of the RVbnb application is to provide a trusted place
              for Landowners and RV Owners to do financial interactions
              together. The RVbnb application has functionality that allows a
              landowner to post a listing of their land with a picture, price
              per day, location, and description of the property. Furthermore,
              the RV owner can then view the landowner's listings and schedule
              dates to reserve the land for use. RVbnb lets RV owners access to
              use previously unknown, unavailable site/locations and allows
              landowners to generate revenue for their unused land.{" "}
            </p>
          </div>
          <div className="IconWrap">
            <a
              href="https://github.com/RVbnb/rvbnb_web_frontend"
              target="_blank"
              className="black-icon"
            >
              <FaGithub className="Icon" />
            </a>
            <a
              href="https://rvbnbwebfrontend.noahfranco.now.sh/"
              target="_blank"
              className="black-icon"
            >
              <MdWebAsset className="Icon" />
            </a>
          </div>
        </div>
        <div>
          <BackEndProjects />
        </div>
      </div>
    );
  }
}

export default Projects;
