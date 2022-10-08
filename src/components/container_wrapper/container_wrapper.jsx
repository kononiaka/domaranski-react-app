import React from 'react';

import classes from './container_wrapper.module.css';

const ContainerWrapper = (props) => {
    return (<div className={`${classes['container-wrapper']} ${props.background}`}>{props.children}</div>);
};

export default ContainerWrapper;