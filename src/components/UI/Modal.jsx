import React, { Fragment } from 'react';

import { useMediaQuery } from 'react-responsive';

import classes from "./Modal.module.css";

const Modal = (props) => {

    const Backdrop = () => {
        return <div className={classes.backdrop} onClick={props.onClick}></div >;
    };
    const ModalOverlay = (props) => {
        const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 900px)'
        });

        if (props.onSubmit && props.onEnroll && !props.onCongrats) {
            return <div className={isDesktopOrLaptop ? classes.submitModalEnroll : classes.submitModalEnroll__responsive}>{props.children}</div>;
        }
        if (props.onSubmit && !props.onEnroll) {
            return <div className={isDesktopOrLaptop ? classes.submitModal : classes.submitModal__responsive}>{props.children}</div>;
        }
        if (props.graf) {
            return <div className={isDesktopOrLaptop ? classes.modal_graf : classes.modal_graf__responsive}>{props.children}</div>;
        }
        if (props.onCongrats) {
            return <div className={isDesktopOrLaptop ? classes.submitModalCongrats : classes.submitModalCongrats__responsive}>{props.children}</div>;
        }
        return <div className={isDesktopOrLaptop ? classes.modal : classes.modal__responsive}>{props.children}</div>;
    };

    // const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            <Backdrop />
            <ModalOverlay onSubmit={props.onSubmit} onEnroll={props.onEnroll} graf={props.graf} onCongrats={props.onCongrats}>{props.children}</ModalOverlay>
        </Fragment>
    );
};

export default Modal;