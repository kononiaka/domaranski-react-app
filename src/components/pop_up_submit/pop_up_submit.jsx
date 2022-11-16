import React from 'react';
import Modal from '../UI/Modal';

import { useMediaQuery } from 'react-responsive';

import classes from './pop_up_submit.module.css';

const PopUpSubmit = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const confirmHandler = async (event) => {
        event.preventDefault();

        const emailValue = event.target[0].value;
        const telValue = event.target[1].value;

        const response = await fetch('https://trading-as-a-business-default-rtdb.europe-west1.firebasedatabase.app/contacts.json', {
            method: 'POST',
            body: JSON.stringify({ emailValue, telValue }),
            'Content-Type': 'application/json'
        });

        const data = await response.json();

        // console.log(response.status);
        console.log(data);
        // console.log(emailValue);
        // console.log(telValue);

        if (response.status === 200) {
            props.onClose();
        }
    };

    return (
        <Modal onClick={props.onClose} onSubmit={props.submit}>
            <div className={isDesktopOrLaptop ? classes["popup-inner"] : classes["popup-inner-responsive"]}>

                <h2>ENROLL NOW FOR THE TRIAL</h2>
                <div className={isDesktopOrLaptop ? classes.cancel_btn : classes.cancel_btn__responsive} onClick={() => props.onClose()}></div>
                <h3>
                    TRADING AS A BUSINESS Trading School
                </h3>
                <form id="modal-form" onSubmit={confirmHandler}>
                    <input type="email" name="email" id="form-email" placeholder="Your Email Address Here..." required="required" aria-required="true" />
                    <input type="tel" name="tel" id="form-tel" minLength="7" maxLength="14" placeholder="Phone Number" required="required" aria-required="true" />
                    <input type="submit" id="form-submit" placeholder="SUBMIT" />
                </form>
                <img className={classes["modal-loading"]} src="./src/img/loading.gif" alt="loading" />
                <p>We protect your privacy in accordance with the terms of our&nbsp;<a href="#">Privacy Policy</a>.</p>
            </div>
        </Modal>
    );
};

export default PopUpSubmit;