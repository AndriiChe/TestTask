import React from 'react';

import classes from './ListItem.module.css';

const listItem = (props) => {

    switch (props.itemType) {
        case ('ListDiv'):
            return <div className={[classes.ListDiv,
            props.isWhite ? classes.WhiteDiv : classes.GrayDiv,
            props.isLast ? classes.LastDiv : null].join(' ')}>{props.children}</div>;
        case ('NumDiv'):
            return <div className={classes.NumDiv}>{props.children}</div>;
        case ('AvatarDiv'):
            return <div className={[classes.AvatarDiv, classes.ContentDiv].join(' ')}>{props.children}</div>;
        case ('RowDiv'):
            return <div className={classes.RowDiv}>{props.children}</div>;
        case ('AuthorNameDiv'):
            return <div className={classes.AuthorNameDiv}>{props.children}</div>;
        case ('PublCountDiv'):
            return <div className={classes.PublCountDiv}>{props.children}</div>;
        case ('ViewsCountDiv'):
            return <div className={classes.ViewsCountDiv}>{props.children}</div>;
        case ('TopDiv'):
            return <div className={[classes.ListDiv, classes.TopDiv, classes.GrayDiv].join(' ')}>{props.children}</div>;
        case ('ContentDiv'):
            return <div className={classes.ContentDiv}>{props.children}</div>;
        case ('HeaderDiv'):
            return <div className={[classes.HeaderDiv, classes.GrayDiv].join(' ')}>{props.children}</div>;
        case ('HeaderTitleDiv'):
            return <div className={classes.HeaderTitleDiv} onClick={props.clicked}>{props.children}</div>;
        case ('NavigationDiv'):
            return <div className={classes.NavigationDiv}>{props.children}</div>;
        default:
            return null;
    }
}

export default listItem;