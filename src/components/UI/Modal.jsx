import React, { Fragment, useEffect } from 'react';
import classes from "./Modal.module.css";

const Modal = (props) => {
    const Backdrop = () => {
        return <div className={classes.backdrop} onClick={props.onClick}></div >;
    };
    const ModalOverlay = (props) => {
        useEffect(() => {

        }, [props]);

        if (props.onSubmit) {
            return <div className={classes.submitModal}>{props.children}</div>;
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