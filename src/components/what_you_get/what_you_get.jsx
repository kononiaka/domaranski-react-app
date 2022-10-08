import React from 'react';
import ContainerWrapper from './../container_wrapper/container_wrapper';

import img_laptop from '../../img/laptop.png';
import img_person from '../../img/person.jpeg';

import classes from './what_you_get.module.css';

const WhatYouGet = () => {
    return (
        <ContainerWrapper background={classes['c-blue-wrapper']}>
            <div id="what_you_get"></div>
            <div className={`${classes['container-inner']} ${classes['c-blue-inner']}`}>
                <h2>What You Get When You Join</h2>
                <h4>TRADING AS A BUSINESS Trading School students are given what they need to succeed. In addition to a complete trading &amp; investing curriculum, you also get:</h4>
                <div className={classes['info-cards']}>
                    <div className={classes['info-card']}>
                        <img className={classes['first-image']} src={img_laptop} alt="laptop" />
                        <h4 className={classes['info-card__title']}>
                            Full Access to TRADING AS A BUSINESS Pro: Essential
                        </h4>
                        <h4>
                            Use the world’s best due diligence tool to research the markets, discover opportunity and conduct your technical analysis.
                        </h4>
                        <b>Normal price: $2,124 / year</b>
                    </div>
                    <div className={classes['info-card']}>
                        <img className={classes['second-image']} src={img_person} alt="person" />
                        <h4 className={classes['info-card__title']}>
                            Meet your instructor:
                        </h4>
                        <h4>
                            Yurii Domaranskyi, Lead Market Technician, TRADING AS A BUSINESS
                        </h4>
                        <ul>
                            <li><b>Trading sice 2018</b></li>
                            <li><b>Head of trading at TRADING AS A BUSINESS</b></li>
                            <li><b>Maximum return in trading career over 200% in a year</b></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.gapper}></div>
        </ContainerWrapper >
    );
};

export default WhatYouGet;