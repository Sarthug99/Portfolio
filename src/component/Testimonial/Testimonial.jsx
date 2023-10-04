import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Slide from "./Slide";
import TestimonialApi from "./TestimonialApi";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerContainer, textVariant2 } from "../../motion";

const Testimonial = () => {
  const [data, setdata] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="Testimonial"
        id="clients"
      >
        <div className="container">
          <motion.div variants={textVariant2} className="heading text-center">
            <h4>LEADERSHIP, AWARDS AND CERTIFICATIONS</h4>
            <h1>Achievements</h1>
          </motion.div>
          <motion.div variants={footerVariants} className="slide">
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}

            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}
          </motion.div>
          <div className="slide_button flex">
            <motion.button
              variants={fadeIn("down", "tween", 1.6, 0.1)}
              className="arrow_btn_shadow prev_btn"
              onClick={() => setIndex(index - 1)}
            >
              <ArrowBackIosIcon />
            </motion.button>

            <motion.button
            variants={fadeIn("down", "tween", 1.8, 0.1)}
              className="arrow_btn_shadow next_btn"
              onClick={() => setIndex(index + 1)}
            >
              <ArrowForwardIosIcon />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Testimonial;
