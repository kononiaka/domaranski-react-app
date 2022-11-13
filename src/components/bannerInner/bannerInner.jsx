import React from 'react';
import ContainerWrapper from './../container_wrapper/container_wrapper';
import Button from '../UI/Button/Button';
import { useMediaQuery } from 'react-responsive';

import classes from "./bannerInner.module.css";

const BannerInner = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <div className={isDesktopOrLaptop ? classes['banner-inner'] : classes['banner-inner-responsive']}>
            <ContainerWrapper>
                <h2>
                    Start Your Trading Journey with TRADING AS A BUSINESS with a 7 Day Trial!
                </h2>
                <Button click={props.handleClick}></Button>
            </ContainerWrapper>
        </div>
    );
};

export default BannerInner;