import React, { useState } from "react";

import ModalHelp from './components/ModalHelp/modalHelp';
import Main from './components/main/main';
import AcceptingStudents from './components/accepting_students/accepting_students';
import WhatYouGet from './components/what_you_get/what_you_get';
import TradingSchool from "./components/tradingSchool/trading_school";
import Education from "./components/education/education";
import Footer from './components/footer/footer';
import PopUpSubmit from './components/pop_up_submit/pop_up_submit';

const Home = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const helpHandler = () => {
    setShowHelp(true);
  };
  const handleClick = () => {
    setShowSubmit(true);
  };

  const helpCloseHandler = () => {
    setShowHelp(false);
    setShowSubmit(false);
  };

  return (
    <>
      <Main handleClick={handleClick} helpHandler={helpHandler}></Main>
      <AcceptingStudents></AcceptingStudents>
      <WhatYouGet></WhatYouGet>
      <TradingSchool></TradingSchool>
      <Education handleClick={handleClick}></Education>
      <Footer></Footer>
      {showSubmit && <PopUpSubmit onClose={helpCloseHandler} submit />}
      {showHelp && <ModalHelp onClose={helpCloseHandler} />}
    </>
  );
};

export default Home;
