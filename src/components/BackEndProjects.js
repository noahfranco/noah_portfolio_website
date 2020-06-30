import React from "react"; 
import "../App.css"; 
import BackIcons from "./BackIcons.js"; 
import { FaGithub } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md"; 
import Potluck from "../img/potluck.png"; 
import Toduelist from "../img/toduelist.png"; 

class BackEndProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = null; 
    }

render() {
    return(
        <>
        <div>
        <BackIcons />
        </div> 

        <div> 
            <img data-aos="zoom-out-down" className="project-img" src={Potluck} /> 
            <h4 className="center-h3"> Potluck Planner </h4>
            <div className="content-wraper"> 
                <p className="center-p"> In the Potluck App I worked as a Backend Developer to create all the REST API endpoints with some fundamental core business testing. Had an awesome front-end development team that created a great front-end user experience. </p>
            </div>  
            <div className="IconWrap"> 
                <a href="https://github.com/build-yelp-10-21/potluck-backend" target="_blank" className="black-icon"> 
                <FaGithub className="Icon"/>
                </a>
            </div> 
        </div>

        <div> 
            <img data-aos="zoom-out-down" className="project-img" src={Toduelist} /> 
            <h4 className="center-h3"> To-Do List </h4>
            <div className="content-wraper"> 
                <p className="center-p"> To-do List is an application built with Node.js with REST API's that allows users to post the name of the task along with the description and whether the task is complete or not </p>
            </div>  
            <div className="IconWrap"> 
                <a href="https://github.com/noahfranco/node-db-challenge" target="_blank" className="black-icon"> 
                <FaGithub className="Icon"/>
                </a>
            </div> 
        </div>
        </>
        )
    }
}

export default BackEndProjects; 