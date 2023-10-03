import React, { useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../motion";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="Contact"
        id="contact"
      >
        <div className="container top">
          <motion.div variants={textVariant2} className="heading text-center">
            <h4>CONTACT</h4>
            <h2>If you want to have a chat or know more, please drop a message.</h2>
          </motion.div>

          <div className="content flex">
            {/* <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Nevine Acotanza</h1>
                  <p>Chief Operating Officer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +01234567890</p>
                  <p>Email: admin@example.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="right ">
              <motion.form
                variants={footerVariants}
                action="https://formspree.io/f/xpzgolzl"
                method="POST"
              >
                <div className="same-row f_flex">
                  <motion.div variants={textVariant(1)} className="input row">
                    <span>Your Name</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </motion.div>
                  <motion.div variants={textVariant(1.5)} className="input row">
                    <span>Phone Number </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </motion.div>
                </div>
                <motion.div variants={textVariant(2)} className="input">
                  <span>Email </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </motion.div>
                <motion.div variants={textVariant(2.5)} className="input">
                  <span>Subject </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </motion.div>
                <motion.div variants={textVariant(3.0)} className="input">
                  <span>Your Message</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </motion.div>
                <motion.button
                  variants={textVariant(3.5)}
                  className="flex contactform_btn_shadow"
                  type="submit"
                >
                  SEND MESSAGE &nbsp; <SendIcon fontSize=""/>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
