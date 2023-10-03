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
                &nbsp; &nbsp; &nbsp; As a ReactJS Developer and Software
                Engineer with a year of experience, I specialize in building
                robust, scalable and performant web applications. My proficiency
                in ReactJS, data structures and algorithms, allows me to develop
                complex applications that meet clients unique needs. If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
              </motion.div>
              <motion.div variants={textVariant(1.3)} className="a-desc">
                Proficient in using modern tools and technologies such as
                ReactJS, Redux, TailwindCss, Material UI. Writing clean,
                well-documented, and maintainable code, ensuring that my
                applications are easy to understand and scale. If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
              </motion.div>
              <motion.div variants={textVariant(1.7)} className="a-desc">
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
              </motion.div>
              <motion.div variants={textVariant(1.7)} className="a-desc">
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
                If you're looking for a ReactJS Developer and Software Engineer
                who is passionate about creating exceptional web applications
                and enjoys working in a fast-paced, dynamic environment, look no
                further. Let's connect!
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Features;
