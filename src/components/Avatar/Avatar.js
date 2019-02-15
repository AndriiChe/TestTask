import React from 'react';

import classes from './Avatar.module.css';

const COLORS = ['#67C9DE', '#BA6FCB', '#E39473', '#AC5061', '#9EC07F', '#B4507B', '#345FEB'];
const avatar = (props) => {
    return (
        <div className={classes.Avatar} style={{ backgroundColor: COLORS[Math.floor(Math.random()*COLORS.length)] }}>
            {props.name.substring(0, 1)}
        </div>
    );
}

export default avatar;