import React from "react";

import Main from './../main/main';
import AcceptingStudents from './../accepting_students/accepting_students';
import WhatYouGet from './../what_you_get/what_you_get';
import TradingSchool from "../tradingSchool/trading_school";

// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Main></Main>
      <AcceptingStudents></AcceptingStudents>
      <WhatYouGet></WhatYouGet>
      <TradingSchool></TradingSchool>
    </>
  );
};

export default Home;
