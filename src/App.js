import React, { useState } from "react";

import ModalHelp from './components/ModalHelp/modalHelp';
import Main from './components/main/main';
import AcceptingStudents from './components/accepting_students/accepting_students';
import WhatYouGet from './components/what_you_get/what_you_get';
import TradingSchool from "./components/tradingSchool/trading_school";
import Education from "./components/education/education";
import Footer from './components/footer/footer';
import PopUpSubmit from './components/pop_up_submit/pop_up_submit';
import ModalEnroll from './components/UI/modalEnroll/modalEnroll';

import { useMediaQuery } from 'react-responsive';

import './App.css';

const Home = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
  });

  const helpHandler = () => {
    setShowHelp(true);
  };
  const handleClick = () => {
    setShowSubmit(true);
  };
  const handleEnroll = () => {
    setShowEnroll(true);
  };

  const helpCloseHandler = () => {
    setShowEnroll(false);
    setShowHelp(false);
    setShowSubmit(false);
  };

  return (
    <div className={isDesktopOrLaptop ? "" : "isResponsive"}>
      <Main handleClick={handleClick} helpHandler={helpHandler} enrollClick={handleEnroll} />
      <AcceptingStudents></AcceptingStudents>
      <WhatYouGet></WhatYouGet>
      <TradingSchool></TradingSchool>
      <Education handleClick={handleClick}></Education>
      <Footer></Footer>
      {showEnroll && <ModalEnroll onClose={helpCloseHandler} submit />}
      {showSubmit && <PopUpSubmit onClose={helpCloseHandler} submit />}
      {showHelp && <ModalHelp onClose={helpCloseHandler} />}
    </div>
  );
};

export default Home;
