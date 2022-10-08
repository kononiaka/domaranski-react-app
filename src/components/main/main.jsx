import React from 'react';
import LeftContainer from "../left_container/left_container";
import help_ico from '../../img/help_icon.png';
import classes from "./main.module.css";
const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes['gap-first']}></div>
            <LeftContainer></LeftContainer>
            <div className={classes.gap}></div>
            <div>
                <img className={classes["help_ico"]} src={help_ico} alt="help-ico" />
            </div>
            {/* <a
          target="_blank"
          rel="noopener noreferrer"
          className="home nav-link-custom"
          href="https://www.instagram.com/matviets_vladimir_artist/">
          <i className="home fab fa-instagram"></i>
        </a> */}
        </div>
    );
};

export default Main;