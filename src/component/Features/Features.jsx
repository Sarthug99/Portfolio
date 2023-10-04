import React from "react";
import "./Features.css";
import img from "../pic/logo1.jpeg";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, planetVariants, staggerContainer, textVariant, textVariant2, zoomIn } from "../../motion";

const Features = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="features top"
        id="features"
      >
        <div className="container">
          <motion.div variants={textVariant2}  className="heading text-center feat-h">
            <h4>INTRODUCTION</h4>
            <h1>Brief Intro</h1>
          </motion.div>

          <div className="a">
            <motion.div variants={fadeIn("right", "tween", 0.4, 1)} className="a-left">
              <div className="box_shadow a-img-cont">
                <img src={img} alt="" className="a-img" />
              </div>
            </motion.div>
            <div className="a-right">
              <motion.div  variants={textVariant(0.9)} className="a-desc">
                &nbsp; &nbsp; &nbsp; Hello, I'm Sarthak, currently pursuing my Masters in Computer Science at New York University. My passion lies at the intersection of software development, data analytics, and artificial intelligence. I thrive on creating meaningful solutions to real-world problems and believe in the power of technology and data to drive positive change.
              </motion.div>
              <motion.div variants={textVariant(1.3)} className="a-desc">
              One of my key strengths is solving complex problems by breaking them into manageable components. I enjoy tackling challenges head-on and take pride in delivering robust and innovative solutions that meet business requirements. I'm a quick learner who thrives in dynamic, fast-paced environments. Whether it's diving into new concepts, mastering cutting-edge technologies, or picking up a new programming language, I'm always up for the challenge. My enthusiasm for continuous learning keeps me at the forefront of industry trends and best practices.           </motion.div>
              <motion.div variants={textVariant(1.7)} className="a-desc">
              I am always excited to collaborate with like-minded professionals, share ideas, and contribute to impactful projects. If you are looking for a dedicated and versatile software developer with a passion for problem-solving, please feel free to reach out.
              Let's connect and explore how we can create innovative solutions together!
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Features;
