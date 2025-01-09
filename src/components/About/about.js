import "./about.css";

import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = ({ setPlayState }) => {
  const handleOnPlay = () => {
    setPlayState(true);
    console.log("Click");
  };

  return (
    <div className="about">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.7 }}
        className="about-left"
      >
        <img className="about-img" src={about_img} alt="" />
        <img
          className="play-icon"
          src={play_icon}
          alt=""
          onClick={handleOnPlay}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.7 }}
        className="about-right"
      >
        <h3>ABOUT UNIVERSITY</h3>
        <h2>NurturingTomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nulla unde numquam perferendis, quidem dolores consequuntur veritatis
          deserunt non reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nulla unde numquam perferendis, quidem dolores consequuntur veritatis
          deserunt non reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nulla unde numquam perferendis, quidem dolores consequuntur veritatis
          deserunt non reprehenderit.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
