import './title.css'

import React from 'react';
import {motion} from "framer-motion"
import { fadeIn } from '../../variants';

const Title = ({subTitle, title}) => {
  return (
    <motion.div 
    variants={fadeIn("left", .2)}
    initial="hidden"
    whileInView={"visible"}
    viewport={{once: false, amount: .7}}
    className='title'>
      <p


      >{subTitle ? subTitle : "Our Program"}</p>
      <h2>{title ? title : "What We Offer"}</h2>
    </motion.div>
  );
}

export default Title;
