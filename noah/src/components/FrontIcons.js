import React from "react";
import "../App.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLess,
  FaSass,
  FaPython,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const FontIcons = () => {
  return (
    <div className="PageSection">
      <div className="Container">
        <h2 className="Text-Center mt-0">Front End Projects</h2>
        <hr className="divider my-4" />
        <div className="Row">
          <div className="row-one">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="Center-Icon">
                  <FaHtml5 className="Icon" />
                </div>
                <div className="Text-Center">
                  <h3 className="h4 mb-2">HTML</h3>
                </div>
                <p className="text-muted mb-0, text-muted"> </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="Center-Icon">
                  <FaCss3Alt className="Icon" />
                </div>
                <div className="Text-Center">
                  <h3 className="h4 mb-2">CSS</h3>
                </div>
                <p className="text-muted mb-0"></p>
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="Center-Icon">
                  <FaReact className="Icon" />
                </div>
                <div className="Text-Center">
                  <h3 className="h4 mb-2">React.js</h3>
                </div>
                <p className="text-muted mb-0"></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="Center-Icon">
                  <DiJavascript1 className="Icon" />
                </div>
                <div className="Text-Center">
                  <h3 className="h4 mb-2">JavaScript</h3>
                </div>
                <p className="text-muted mb-0"></p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <FaReact className="Icon" />
            <h3 className="h4 mb-2">Sass</h3>
            <FaSass className="Icon" />
            <p className="text-muted mb-0">Programming knowledge and experience with React.js</p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default FontIcons;
