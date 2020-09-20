import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../App.css";

import { slide as Menu } from "react-burger-menu";
import "./sidebar.scss";

const NavBar = () => {
  return (
    <>
      <Menu>
        <h2 style={{ frontWeight: "900px" }}> Noah Franco </h2>

        <Link to="/" className="landing-page-link">
          {" "}
          Home{" "}
        </Link>
        <Link to="/projects" className="linkColor">
          {" "}
          Projects{" "}
        </Link>
        {/* There's a weird img on the contact page and not sure where it's coming from */}
        {/* <Link to="/contact" className="linkColor"> Contact </Link>  */}
        {/* commenting out resume for now */}
        {/* <Link to="/resume" className="linkColor">
          {" "}
          Resume{" "}
        </Link> */}
        <div className="SocialOnNav">
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
      </Menu>
    </>
  );
};

// {/* <>
//   <Navbar bg="dark" variant="dark" sticky="top" className="x-y">
//     {/* <img src={Noah} />  */}
//     <Navbar.Brand>
//         <Link to="/" className="landing-page-link"> Noah Franco </Link>
//     </Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link>
//         <Link to="/projects" className="linkColor"> Projects </Link>
//       </Nav.Link>
//       <Nav.Link>
//         <Link to="/contact" className="linkColor"> Contact </Link>
//       </Nav.Link>
//     </Nav>
//     <div className="SocialOnNav">
//             <a href="https://www.linkedin.com/in/noahfranco/" target="_blank" className="NoColor"> <FaLinkedin /> </a>
//             <div className="Small-Space"> </div>
//              <a href="https://github.com/noahfranco" target="_blank" className="NoColor"> <FaGithub /> </a>
//             <div className="Small-Space"> </div>
//             <a href="https://twitter.com/noahfranco_" target="_blank" className="NoColor"> <FaTwitter /> </a>
//         </div>
//   </Navbar>
// </> */}

export default NavBar;
