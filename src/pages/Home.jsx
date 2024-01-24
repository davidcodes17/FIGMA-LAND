import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Features from "../layouts/Features";
import Content from "../layouts/Content";
import Gallery from "../layouts/Gallery";
import Partners from "../layouts/Partners";
import Testimonials from "../layouts/Testimonials";
import Ads from "../layouts/Ads";
import Footer from "../layouts/Footer";
import NavContent from "../layouts/NavContent";

const Home = () => {
  const [dis,setDis] = useState("none");
  return (
    <Box pos={"relative"}>
      <Header onClick={()=>{
        setDis("block")
      }} />
      <Box
        position={"fixed"}
        top={0}
        right={0}
        display={dis}
        zIndex={999}
        width={"100vw"}
        height={"100vh"}
        bg={"#2a2a2a0f"}
        backdropFilter={"blur(50px)"}
      >
        <NavContent onClick={()=>{
          setDis("none")
        }} />
      </Box>
      <Hero />
      <Features />
      <Content />
      <Gallery />
      <Partners />
      <Testimonials />
      <Ads />
      <Footer />
    </Box>
  );
};

export default Home;
