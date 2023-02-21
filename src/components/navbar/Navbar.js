import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { images } from "../../images/index";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={images.netflixLogo} alt="NetflixLogo" />
      <img
        className="nav__avtar"
        src={images.netflixAvater}
        alt="NetflixAvatat"
      />
    </div>
  );
}

export default Navbar;
