import { React } from 'react';
import Modal from './../UI/Modal';

import classes from './modalHelp.module.css';


const ModalHelp = (props) => {
    return (
        <Modal onClick={props.onClose}>
            <p><b>Need Help?</b> Call or Email Now:</p>
            <div>
                <div className={classes.email_logo}>
                    <a href="mailto:swing.trading.as.a.business@gmail.com">swing.trading.as.a.business@gmail.com</a>
                </div>
            </div>
            <div className={classes.phone_logo_block}>
                <div className={classes.phone_logo}>
                    <a href="tel:+380734940031">+380734940031</a>
                </div>
            </div>
        </Modal>
    );
};

export default ModalHelp;