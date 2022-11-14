import { useMediaQuery } from 'react-responsive';

import ContainerWrapper from './../container_wrapper/container_wrapper';

import img_laptop from '../../img/laptop.png';
import img_person from '../../img/person.jpeg';

import classes from './what_you_get.module.css';

const WhatYouGet = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <ContainerWrapper background={classes['c-blue-wrapper']}>
            <div id="what_you_get"></div>
            <div className={isDesktopOrLaptop ? `${classes['container-inner']} ${classes['c-blue-inner']}` : `${classes['container-inner-responsive']} ${classes['c-blue-inner-responsive']}`}>
                <h2>What You Get When You Join</h2>
                <h4>TRADING AS A BUSINESS Trading School students are given what they need to succeed. In addition to a complete trading &amp; investing curriculum, you also get:</h4>
                <div className={isDesktopOrLaptop ? classes['info-cards'] : classes['info-cards-responsive']}>
                    <div className={isDesktopOrLaptop ? classes['info-card'] : classes['info-card-responsive']}>
                        <img className={classes['first-image']} src={img_laptop} alt="laptop" />
                        <h4 className={isDesktopOrLaptop ? classes['info-card__title'] : classes['info-card__title__responsive']}>
                            Full Access to TRADING AS A BUSINESS Pro: Essential
                        </h4>
                        <h4>
                            Use the world’s best due diligence tool to research the markets, discover opportunity and conduct your technical analysis.
                        </h4>
                        <b>Normal price: $2,124 / year</b>
                    </div>
                    <div className={isDesktopOrLaptop ? classes['info-cards'] : classes['info-cards-responsive']}>
                        <img className={isDesktopOrLaptop ? classes['second-image'] : classes['second-image-responsive']} src={img_person} alt="person" />
                        <h4 className={classes['info-card__title']}>
                            Meet your instructor:
                        </h4>
                        <h4>
                            Yurii Domaranskyi, Lead Market Technician, TRADING AS A BUSINESS
                        </h4>
                        <ul>
                            <li><b>Trading since 2018</b></li>
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