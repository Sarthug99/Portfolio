import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
      >
        <motion.div
          variants={footerVariants}
          className="footer-container text-center top"
        >
          <div className="footer-wrapper">
            <div className="quote-wrap">
              <span className="quote">
                Believe <br /> <span className="red-text">You Can</span> <br />{" "}
                and you're halfway there.
              </span>
            </div>
            <div>
              <div className="c-box">
                <div className="c-head">CONNECT WITH ME</div>
                <div className="c-details">
                  <CallIcon fontSize="small" /> &nbsp;+1(929) 9287516
                </div>
                <div className="c-details">
                  <MarkEmailReadIcon fontSize="small" />
                  &nbsp;sarthakumarani99@gmail.com
                </div>
              </div>
              <div className="">
                <div className="button2">
                  <a
                    href="https://www.linkedin.com/in/sarthak-umarani"
                    target="_blank"
                  >
                    <button className=" contact_btn_shadow2">
                      <LinkedInIcon fontSize="large" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/Sarthug99"
                    target="_blank"
                    className="contact-links"
                  >
                    <button className="contact_btn_shadow2">
                      <GitHubIcon fontSize="large" />
                    </button>
                  </a>
                  <a href="mailto:sarthakumarani99@gmail.com" target="_blank">
                    <button className="contact_btn_shadow2">
                      <EmailIcon fontSize="large" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p>© 2023. All rights reserved by Sarthak Umarani.</p>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;
