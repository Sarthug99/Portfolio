import React from "react";
import "./Skills.css";
import devImg from "./mern-dev-img.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, textVariant2, zoomIn } from "../../motion";

const Skills = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      id="skills"
    >
      <div className="skills">
        <motion.div variants={textVariant2} className="heading text-center">
          <h4>PASSION FUELS PURPOSE</h4>
          <h1>My Skills</h1>
        </motion.div>
        <div className="skill-wrapper">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="left-item"
          >
            <ol className="list">
              <motion.li variants={textVariant(0.6)} className="item">
                <h3> Programming Languages:</h3>
                <span> C, C++, Python, SQL, Java </span>
              </motion.li>
              <motion.li variants={textVariant(1)} className="item">
                <h3>Libraries</h3>
                <span className="skill-names">
                Scipy, Numpy, Pandas, NLTK, Tensorflow, PySpark, Matplotlib, SQLAlchemy, Flask, Keras
                </span>
              </motion.li>
              <motion.li variants={textVariant(1.4)} className="item">
                <h3>Web Technologies: </h3>
                <span>
                HTML, CSS, Bootstrap, JavaScript, Angular, D3.js, SpringBoot, TypeScript, Hibernate
                </span>
              </motion.li>
              <motion.li variants={textVariant(1.8)} className="item">
                <h3>Tools:</h3>
                <span>
                Anaconda, Git, JIRA, Jupyter Notebook, Confluence, Jenkins, Openshift
                </span>
              </motion.li>
              <motion.li variants={textVariant(2.2)} className="item">
                <h3>Databases</h3>
                <span>
                  Oracle, Postgresql, MySQL
                </span>
              </motion.li>
            </ol>
          </motion.div>
          <motion.div variants={zoomIn(0.3,1)} className="right-item">
            <img src={devImg} alt="" className="devImg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
