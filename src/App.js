import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Programs from "./components/Programs/programs";
import Title from "./components/Title/title";
import About from "./components/About/about";
import Campus from "./components/Campus/campus";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle={"Gallery"} title={"Campus Photos"}/>
        <Campus />
        <Title subTitle={"TESTIMONIALS"} title={"What Student Says"}/>
        <Testimonials />
        <Title subTitle={"Contact Us"} title={"Get in Touch"}/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer setPlayState={setPlayState} playState={playState}/>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
      </Routes>
    </>
  );
};

export default App;

// npm error code EINVALIDPACKAGENAME
// npm error Invalid package name "react- " of package "react- @^18.3.1": name cannot contain leading or trailing spaces; name can only contain URL-friendly characters.
// npm error A complete log of this run can be found in: C:\Users\msi2021\AppData\Local\npm-cache\_logs\2024-10-24T15_42_27_408Z-debug-0.log
