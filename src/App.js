import React, { useState, useCallback } from "react";
import ModalHelp from './components/ModalHelp/modalHelp';
import Main from './components/main/main';
import AcceptingStudents from './components/accepting_students/accepting_students';
import WhatYouGet from './components/what_you_get/what_you_get';
import TradingSchool from "./components/tradingSchool/trading_school";
import Education from "./components/education/education";
import Footer from './components/footer/footer';
import ModalEnroll from './components/UI/modalEnroll/modalEnroll';

import { useMediaQuery } from 'react-responsive';

import './App.css';
import GrafBanner from "./components/graf_banner/graf_banner";
import GrafHelp from "./components/graf_banner/graf_help";

const Home = (props) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);
  const [showGraf, setShowGraf] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
  });

  const helpHandler = () => {
    setShowHelp(true);
  };
  const handleClick = useCallback(() => {
    setShowSubmit(true);
    setShowEnroll(false);
  }, []);

  const handleEnroll = () => {
    setShowEnroll(true);
  };

  const helpCloseHandler = () => {
    setShowEnroll(false);
    setShowHelp(false);
    setShowSubmit(false);
    setShowGraf(false);
  };

  const handleGrafClick = () => {
    setShowGraf(true);
  };

  const followContactsHandler = () => {
    setShowHelp(true);
  };

  return (
    <div className={isDesktopOrLaptop ? "" : "isResponsive"}>
      <Main handleClick={handleClick} helpHandler={helpHandler} enrollClick={handleEnroll} followContacts={followContactsHandler} />
      <AcceptingStudents></AcceptingStudents>
      <WhatYouGet></WhatYouGet>
      <TradingSchool></TradingSchool>
      <Education handleClick={handleClick}></Education>
      <Footer></Footer>
      <GrafBanner handleGrafClick={handleGrafClick} onClose={helpCloseHandler}></GrafBanner >
      {showEnroll && <ModalEnroll onClose={helpCloseHandler} />}
      {showSubmit && <ModalEnroll onClose={helpCloseHandler} />}
      {showHelp && <ModalHelp onClose={helpCloseHandler} />}
      {showGraf && <GrafHelp onClose={helpCloseHandler} graf />}
    </div>
  );
};

export default Home;
