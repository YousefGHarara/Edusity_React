import "./campus.css";

import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <motion.img
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.7 }}
          src={gallery_1}
          alt=""
        />
        <motion.img
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.7 }}
          src={gallery_2}
          alt=""
        />
        <motion.img
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.7 }}
          src={gallery_3}
          alt=""
        />
        <motion.img
          variants={fadeIn("left", 0.35)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.7 }}
          src={gallery_4}
          alt=""
        />
      </div>

      <motion.button
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.7 }}
        className="btn dark-btn"
      >
        See more here <img src={white_arrow} alt="" />
      </motion.button>
    </div>
  );
};

export default Campus;
