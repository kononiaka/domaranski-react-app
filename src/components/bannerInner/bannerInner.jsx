import React from 'react';

import classes from "./bannerInner.module.css";
import ContainerWrapper from './../container_wrapper/container_wrapper';

const BannerInner = (props) => {
    return (
        <div className={classes['banner-inner']}>
            <ContainerWrapper>
                <h2>
                    Start Your Trading Journey with TRADING AS A BUSINESS with a 7 Day Trial!
                </h2>
                <div className={classes.banner__btn} onClick={props.handleClick}>
                    Start Your 7-Day Trial Now!
                </div>
            </ContainerWrapper>
        </div>
    );
};

export default BannerInner;