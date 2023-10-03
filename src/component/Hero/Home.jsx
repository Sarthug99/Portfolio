import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import { Typewriter } from "react-simple-typewriter";
import circle from "../pic/circle.svg";
import react from "../pic/react.png";
import spring from "../pic/springboot.png"
import flask from "../pic/flask.png";
import javascript from "../pic/javascript.png";
import git from "../pic/git.png";
import tensorflow from "../pic/tensorflow.png"
import node from "../pic/node.png";
import spark from "../pic/spark.png";
import hadoop from "../pic/hadoop.png"
import typescript from "../pic/typescript.png";
import postgres from "../pic/postgresql.png";
import angular from "../pic/Angular.png"
import resume from "../../assets/Sarthak_resume.pdf";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../motion";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          // viewport={{ once: false, amount: 0.25 }}
          whileInView="show"
          className="container f_flex top"
        >
          <div className="left top">
            <motion.div variants={fadeIn("right", "tween", 0.4, 1)}>
              <motion.h3 variants={textVariant(0.6)}>
                HELLO WORLD!
              </motion.h3>
              <motion.h1 variants={textVariant(0.9)}>
                I’m <span>Sarthak</span>
              </motion.h1>
              <motion.h2
                variants={textVariant(1.3)}
                className="typewriter-head"
              >
                <span>
                  <Typewriter
                    words={[" a Software Developer.", "an ML Enthusiast.", " a Leader."]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </motion.h2>

              <motion.p variants={textVariant(1.5)}>
                MS Computer Science Student at New York University | Ex-Citi | COEP |
                Data Engineering | Software Development | Artificial Intelligence / Machine Learning
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="hero_btn d_flex"
            >
              <div className="col_1">
                <h4>CONNECT WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.linkedin.com/in/sarthak-umarani"
                    target="_blank"
                  >
                    <button className="contact_btn_shadow ">
                      <LinkedInIcon fontSize="large" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/Sarthug99"
                    target="_blank"
                    className="contact-links"
                  >
                    <button className="contact_btn_shadow">
                      <GitHubIcon fontSize="large" />
                    </button>
                  </a>

                  <a href="mailto:sarthakumarani99@gmail.com" target="_blank">
                    <button className="contact_btn_shadow">
                      <EmailIcon fontSize="large" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>DOWNLOAD</h4>
                <button>
                  <a href={resume} download className="resume_btn_shadow">
                    RESUME &nbsp;
                    <FileDownloadIcon />
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div variants={zoomIn(0.3, 1)} className="right">
            <div className="right_img">
              <img src={circle} alt="" />
            </div>
            <img src={react} alt="" className="hero-logo lg1" />
            <img src={flask} alt="" className="hero-logo lg2" />
            <img src={hadoop} alt="" className="hero-logo lg3" />
            <img src={node} alt="" className="hero-logo lg4" />
            <img src={typescript} alt="" className="hero-logo lg5" />
            <img src={spark} alt="" className="hero-logo lg6" />
            <img src={javascript} alt="" className="hero-logo lg7" />
            <img src={postgres} alt="" className="hero-logo lg8" />
            <img src={spring} alt="" className="hero-logo lg9"/>
            <img src={angular} alt="" className="hero-logo lg10"/>
            <img src={tensorflow} alt="" className="hero-logo lg11"/>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
