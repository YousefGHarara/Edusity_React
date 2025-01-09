import "./programs.css";

import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Programs = () => {
  return (
    <div className="programs home">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        // viewport={{ once: false, amount: 0.7 }}
        className="program"
      >
        <img className="program-img" src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"visible"}
        // viewport={{ once: false, amount: 0.7 }}
        className="program"
      >
        <img className="program-img" src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"visible"}
        // viewport={{ once: false, amount: 0.7 }}
        div
        className="program"
      >
        <img className="program-img" src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Programs;
