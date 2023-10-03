import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../pic/logo1.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { headerVariants } from "../../motion";

const Header = () => {
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   header.classList.toggle("active", window.scrollY > 100);
  // });
  const useHeaderShadow = () => {
    const [headerShadow, setHeaderShadow] = useState(false);
    //to handle shadow of header
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
          setHeaderShadow(
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
          );
        } else {
          setHeaderShadow("none");
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return headerShadow;
  };
  const headerShadow = useHeaderShadow();
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header" style={{ boxShadow: headerShadow }}>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          className="container d_flex"
        >
          {" "}
          <a href="#home">
            <div className="logo">
              <img className="logo" src={logo} alt="" />
            </div>
          </a>
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">About</a>
              </li>
              <li>
                <a href="#resume">experience</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#portfolio">projects</a>
              </li>

              <li>
                <a href="#clients">achievements</a>
              </li>

              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <div className="close">
                  <CloseIcon />
                </div>
              ) : (
                <div className="open">
                  <MenuIcon fontSize="large" />
                </div>
              )}
            </button>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
