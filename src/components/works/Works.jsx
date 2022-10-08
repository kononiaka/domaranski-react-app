import React, { Component } from "react";
import "./Works.css";
import Gallery from "../gallery/Gallery";
import Links from "./../links/Links";
import Header from "./../header/Header";
import NavBar from './../navBar/navBar';
import BannerInner from "../bannerInner/bannerInner";
import AcceptingStudents from './../accepting_students/accepting_students';
import WhatYouGet from './../what_you_get/what_you_get';

class Works extends Component {
  state = {
    images: [
      { id: 1, src: require("../../img/no_img.jpg") },
      { id: 2, src: require("../../img/no_img.jpg") },
      { id: 3, src: require("../../img/no_img.jpg") },
      { id: 4, src: require("../../img/no_img.jpg") },
      { id: 5, src: require("../../img/no_img.jpg") },
      { id: 6, src: require("../../img/no_img.jpg") },
    ],
    menuOpen: true,
  };
  handleMenu = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };
  render() {
    let menuOpen;

    if (this.state.menuOpen) {
      menuOpen = <Links show={this.state.menuOpen} />;
    }
    return (
      <>
        <NavBar></NavBar>
        <BannerInner></BannerInner>
        <AcceptingStudents></AcceptingStudents>
        <WhatYouGet></WhatYouGet>
        <div className="container-custom">
          <div className="menu-block">
            <button onClick={this.handleMenu} className="menu-btn">
              Menu
            </button>
          </div>
          <Header></Header>
          <div className="row">
            {menuOpen}
            <div className="col">
              <Gallery elements={this.state.images} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Works;
