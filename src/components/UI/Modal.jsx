import React, { Fragment, useEffect } from 'react';

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

        useEffect(() => {

        }, [props]);

        if (props.onSubmit) {
            return <div className={isDesktopOrLaptop ? classes.submitModal : classes.submitModal__responsive}>{props.children}</div>;
        }
        return <div className={classes.modal}>{props.children}</div>;
    };

    // const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            <Backdrop />
            <ModalOverlay onSubmit={props.onSubmit}>{props.children}</ModalOverlay>
        </Fragment>
    );
};

export default Modal;