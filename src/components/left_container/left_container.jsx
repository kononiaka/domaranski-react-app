import React from 'react';
import BannerInner from './../bannerInner/bannerInner';
import NavBar from './../navBar/navBar';

import { useMediaQuery } from 'react-responsive';

import classes from './left_container.module.css';

const LeftContainer = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <>
            <div className={isDesktopOrLaptop ? classes.card : classes['card-responsive']}>
                < NavBar />
                <ul className={isDesktopOrLaptop ? classes['list-link'] : classes['list-link-responsive']} style={{ listStyleType: 'none' }}>
                    <li><a className={isDesktopOrLaptop ? classes['list-link-a'] : classes['list-link-a-responsive']} href="#accepting_students">Study</a></li>
                    <li><a className={isDesktopOrLaptop ? classes['list-link-a'] : classes['list-link-a-responsive']} href="#what_you_get">What you get?</a></li>
                    {/* <li><a className={classes['list-link-a']} href="#trading_school">Our Mission</a></li> */}
                    <li><a className={isDesktopOrLaptop ? classes['list-link-a'] : classes['list-link-a-responsive']} href="#trading_school">Process</a></li>
                    <li><a className={isDesktopOrLaptop ? classes['list-link-a'] : classes['list-link-a-responsive']} href="#education">Education</a></li>
                    <li><a className={isDesktopOrLaptop ? classes['list-link-a'] : classes['list-link-a-responsive']} href="#contacts">Contact Us</a></li>
                </ul>
                <h1 className={isDesktopOrLaptop ? classes['logo-text'] : classes['logo-text-responsive']}>
                    TRADING AS A BUSINESS <br></br><span>TRADING SCHOOL</span>
                </h1>
                <BannerInner handleClick={props.handleClick}></BannerInner>
            </div>
        </>
    );
};

export default LeftContainer;