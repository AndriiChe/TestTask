import React from 'react';

import classes from './Arrow.module.css';

const arrow = (props) => {

    switch (props.arrowType) {
        case ('UpArrow'):
            return <i className={classes.UpArrow} />;
        case ('DownArrow'):
            return <i className={classes.DownArrow} />;
        case ('LeftArrow'):
            return <i className={classes.LeftArrow} onClick={props.clicked} />;
        case ('RightArrow'):
            return <i className={classes.RightArrow} onClick={props.clicked} />;
        default:
            return <i className={classes.Empty} />;;
    }
}

export default arrow;