import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "../../motion";

const Portfolio = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="Portfolio top"
        id="portfolio"
      >
        <div className="container">
          <motion.div variants={textVariant2} className="heading text-center ">
            <h4>CREATIVITY HAS NO BOUNDS</h4>
            <h1>Projects</h1>
          </motion.div>

          <div className="content grid">
            {Portfolio_data.map((value, index) => {
              return (
                <motion.div variants={fadeIn("up", "tween", (index+1)*0.3, 0.4)}>
                  <Card
                    key={index}
                    image={value.image}
                    category={value.category}
                    title={value.title}
                    desc={value.desc}
                    desc2={value.desc2}
                    link={value.link}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;
