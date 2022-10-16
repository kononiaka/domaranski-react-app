import React from 'react';
import BannerInner from './../bannerInner/bannerInner';
import NavBar from './../navBar/navBar';

import classes from './left_container.module.css';

const LeftContainer = (props) => {
    return (
        <>
            <div className={classes.card}>
                < NavBar />
                <ul className={classes['list-link']} style={{ listStyleType: 'none' }}>
                    <li><a className={classes['list-link-a']} href="#accepting_students">Study</a></li>
                    <li><a className={classes['list-link-a']} href="#what_you_get">What you get?</a></li>
                    {/* <li><a className={classes['list-link-a']} href="#trading_school">Our Mission</a></li> */}
                    <li><a className={classes['list-link-a']} href="#trading_school">Process</a></li>
                    <li><a className={classes['list-link-a']} href="#education">Education</a></li>
                    <li><a className={classes['list-link-a']} href="#contacts">Contact Us</a></li>
                </ul>
                <h1 className={classes['logo-text']}>
                    TRADING AS A BUSINESS <br></br><span>TRADING SCHOOL</span>
                </h1>
                <BannerInner handleClick={props.handleClick}></BannerInner>
            </div>
        </>
    );
};

export default LeftContainer;