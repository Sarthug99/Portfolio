import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer, textVariant2 } from "../../motion";
import "./Resume.css"
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

const Resume = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        // viewport={{ once: false, amount: 0.25 }}
        whileInView="show"
        className="Resume"
        id="resume"
      >
        <div className="container top">
          <motion.div variants={textVariant2} className="heading text-center">
            <h4>MY JOURNEY</h4>
            <h1>Education & Experience</h1>
          </motion.div>
          <motion.div variants={footerVariants} className="experience">
            <VerticalTimeline lineColor="#3e497a">
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Expected Graduation - May 2025"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  New York University | Brooklyn, NY
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  GPA - (1st Sem ongoing)
                </h4>
                <p><b> Coursework - </b> Machine Learning, Big Data, Design and Analysis of Algorithms.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug 2022 - Jul 2023"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Citigroup Inc. (CitiBank) | Pune, India
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                Full Stack Developer 
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                Stack - <i> Angular, Java, SpringBoot, SQL, ShellScript, Jenkins, Openshift, Python </i>
                </h5>

                <p> ◦ Spearheaded development efforts on the ORaaS platform, a robust infrastructure hosting over 10,000 Oracle databases, ensuring <b> seamless operation </b> and <b>optimal performance.</b></p>
                <p> ◦ Managed the entire application lifecycle, from building to promotion and deployment, leveraging CI/CD tools, resulting in increased efficiency and reliability. </p>
                <p> ◦ Led the development of an API testing framework using ShellScript, boosting the test coverage by 50%. </p>
                <p> ◦ Implemented a user-friendly chatbot, effectively addressing FAQs, resulting in 30% enhancement in user engagement and support.   </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Jul 2021- Aug 2022"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Citigroup Inc. (Citibank) | Pune, India
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  Data Engineer
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Stack - <i> Hadoop, PySpark, SQL, Hive, Impala, Flask, Redis, Python, Angular </i>
                </h5>

                <p> ◦ Engineered prototypes in Pyspark for diverse trade surveillance scenarios, as a member of the Data Engineering team, streamlining data analysis and ensuring compliance.</p>
                <p> ◦ Innovated key features for a market-abuse detection scenario, bringing down the false positives by 70%.</p>
                <p> ◦ Created a user interface for presenting prototype results. Additionally, automated the UI refreshment by writing Python scripts, leading to a reduction in manual workload by 90%.</p>
                <p> ◦ Collaborated effectively in a cross-functional team of four to deliver a code quality dashboard, enabling users to analyze code quality reports across specific timeframes, enhancing data-driven decision making.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2020 - Jul 2020"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Citigroup Inc. (Citibank) | Pune, India
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Summer Intern
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                Stack - HTML, CSS, JavaScript, BootStrap, JQuery, D3.js, Flask
                </h4>
                
                <p>
                ◦ Designed a Model Assessment Dashboard that presented statistics and Key Performance Indicators (KPIs) for behavioral trade surveillance models. 
                </p>
                <p>
                ◦ Enabled on-the-fly analysis of model results, increasing efficiency and reducing manual analysis time by 80%.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2019 - July 2019"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Cerelabs | Mumbai, India
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Research and Development Intern
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                 Stack - <i> TensorFlow, Keras, Deep Learning, Python, Image Processing </i>
                </h5>
                <p>
                  ◦ Performed text extraction from images using a Faster R-CNN model for text detection and a CNN based on ResNet18 architecture for text recognition. The integrated model achieved an accuracy of 83%.
                </p>
                <p>
                  ◦ Annotated over 1000 images to prepare datasets for training the Deep Learning models.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug 2017 - May 2021"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  College of Engineering | Pune, India
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  CGPA - 8.75 | Class Rank - 8
                </h4>
                <p>
                  Coursework - Fundamentals of Computer Programming, Data Structures, Image Processing, Computer Architecture, Operating Systems, Computer Networks, Internet of Things, Digital Signal Processing, DBMS, Internet Technologies, Object Oriented Programming and Design, Speech Processing, Intermediate Programming Concepts and Tools.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Resume;
