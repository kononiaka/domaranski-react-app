import React from 'react';
import LeftContainer from "../left_container/left_container";
import { useMediaQuery } from 'react-responsive';

import help_ico from '../../img/help_icon.png';

import classes from "./main.module.css";

const Main = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <div className={isDesktopOrLaptop ? classes.main : classes["main-responsive"]}>
            {isDesktopOrLaptop && <div className={classes['gap-first']} />}
            <LeftContainer handleClick={props.handleClick} click={props.enrollClick} />
            {isDesktopOrLaptop && <div className={classes.gap} />}
            <div>
                <img className={isDesktopOrLaptop ? classes["help-ico"] : classes["help-ico-responsive"]} src={help_ico} alt="help-ico" onClick={props.helpHandler} />
            </div>

        </div >
    );
};

export default Main;