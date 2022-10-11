import React from "react";

import Main from './../main/main';
import AcceptingStudents from './../accepting_students/accepting_students';
import WhatYouGet from './../what_you_get/what_you_get';
import TradingSchool from "../tradingSchool/trading_school";
import Education from "../education/education";
import Footer from "../footer/footer";

// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Main></Main>
      <AcceptingStudents></AcceptingStudents>
      <WhatYouGet></WhatYouGet>
      <TradingSchool></TradingSchool>
      <Education></Education>
      <Footer></Footer>
    </>
  );
};

export default Home;
