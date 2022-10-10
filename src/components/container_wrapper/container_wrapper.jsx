import React from 'react';

import classes from './container_wrapper.module.css';

const ContainerWrapper = (props) => {
    return (<div className={props.background ? `${classes['container-wrapper']} ${props.background}` : classes['container-wrapper']}>{props.children}</div>);
};

export default ContainerWrapper;