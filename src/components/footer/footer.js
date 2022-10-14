import React from 'react';

import logo from '../../img/logo.png';
import fb_logo from '../../img/facebook.svg';
import fb_twitter from "../../img/twitter.svg";
import fb_instagramm from "../../img/instagram.svg";
import fb_youtube from "../../img/youtube.svg";
import fb_patreon from "../../img//patreon.svg";
import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer id="contacts" className={classes.footer}>
            <div className={classes["footer-up"]}>Information contained in this email and websites maintained by TRADING AS A BUSINESS  are provided for educational purposes only and are neither an offer nor a recommendation to buy or sell any security, options on equities, or cryptocurrency. TRADING AS A BUSINESS and its affiliates may hold a position in any of the companies mentioned. TRADING AS A BUSINESS is neither a registered investment adviser nor a broker-dealer and does not provide customized or personalized recommendations. Any one-on-one coaching or similar products or services offered by or through TRADING AS A BUSINESS does not provide or constitute personal advice, does not take into consideration and is not based on the unique or specific needs, objectives or financial circumstances of any person, and is intended for educational purposes only. Past performance is not necessarily indicative of future results. No trading strategy is risk free. Trading and investing involve substantial risk, and you may lose the entire amount of your principal investment or more. You should trade or invest only “risk capital” - money you can afford to lose. Trading and investing is not appropriate for everyone. We urge you to conduct your own research and due diligence and obtain professional advice from your personal financial adviser or investment broker before making any investment decision.</div>
            <div className={classes["footer-down"]}>
                <div className={classes["logo-and-div"]}>
                    <img className={classes["logo-and-div__logo"]} alt="logo" src={logo} />
                    <div className={`${classes["logo-and-div__div"]} ${classes["social-media"]}`}>
                        <a href="https://www.facebook.com/profile.php?id=100058474374239"><img src={fb_logo} alt="social media" /></a>
                        <a href="https://twitter.com/Trading_Busines"><img src={fb_twitter} alt="social media" /></a>
                        <a href="https://www.instagram.com/trading.as.a.business/"><img src={fb_instagramm} alt="social media" /></a>
                        <a href="https://www.youtube.com/channel/UCCAcjF2NBn7GS3dl9zq3O5g"><img src={fb_youtube} alt="social media" /></a>
                        <a href="https://www.patreon.com/TradingAsABusiness?fan_landing=true"><img src={fb_patreon} alt="social media" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;