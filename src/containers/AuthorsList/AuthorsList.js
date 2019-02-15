import React, { Component } from 'react';

import ListItem from '../ListItem/ListItem';
import Arrow from '../../components/Arrow/Arrow';
import Avatar from '../../components/Avatar/Avatar';
import classes from './AuthorsList.module.css';

const PAGINATION_STEP = 10;

class AuthorsList extends Component {
    state = {
        sortByViews: true,
        reverse: false,
        searchFor: '',
        paginationStart: 1
    }

    sortByNameHandler = () => {
        if (this.state.sortByViews) {
            this.setState({
                sortByViews: false,
                reverse: false
            });
        } else {
            this.setState({ reverse: !this.state.reverse });
        }
    }

    sortByViewsHandler = () => {
        if (!this.state.sortByViews) {
            this.setState({
                sortByViews: true,
                reverse: false
            });
        } else {
            this.setState({ reverse: !this.state.reverse });
        }
    }

    increasePaginationHandler = () => {
        this.setState({ paginationStart: this.state.paginationStart + PAGINATION_STEP });
    }

    decreasePaginationHandler = () => {
        this.setState({ paginationStart: this.state.paginationStart - PAGINATION_STEP });
    }

    render() {
        let sortedData = [...this.props.data];
        if (!this.state.sortByViews) {
            sortedData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        }
        if (this.state.reverse) {
            sortedData.reverse();
        }
        if (this.state.searchFor.length > 0) {
            sortedData = sortedData.filter((author) => author.name.toLowerCase().includes(this.state.searchFor.toLowerCase()));
        }
        const list = sortedData.map((author, index) => {
            if (index + 1 >= this.state.paginationStart
                && index + 1 < this.state.paginationStart + PAGINATION_STEP) {
                return (<ListItem key={author.topPlace} itemType="ListDiv"
                    isWhite={index % 2 === 0}
                    isLast={index === this.props.data.length - 1 || index + 1 === this.state.paginationStart + PAGINATION_STEP - 1}>
                    <ListItem itemType="NumDiv">{index + 1}</ListItem>
                    <ListItem itemType="AvatarDiv">
                        <Avatar name={author.name} />
                    </ListItem>
                    <ListItem itemType="ContentDiv">
                        <ListItem itemType="RowDiv">
                            <ListItem itemType="AuthorNameDiv">{author.name}</ListItem>
                        </ListItem>
                        <ListItem itemType="RowDiv">
                            <ListItem itemType="PublCountDiv" >{author.count_pub + " публ."}</ListItem>
                        </ListItem>
                    </ListItem>
                    <ListItem itemType="ContentDiv">
                        <img className={classes.MedalLogo}
                            src={author.topPlace > 2
                                ? ""
                                : author.topPlace === 0
                                    ? require("../../images/first.png")
                                    : author.topPlace === 1
                                        ? require("../../images/second.png")
                                        : require("../../images/third.png")} />
                    </ListItem>
                    <ListItem itemType="ViewsCountDiv" >{author.pageviews}</ListItem>
                </ListItem>)
            }

        })
        return (
            <React.Fragment>
                <ListItem itemType="TopDiv">
                    <ListItem itemType="ContentDiv">
                        <img className={classes.Icon} src={require("../../images/search.png")} />
                        <input type="text"
                            className={classes.Input}
                            value={this.state.searchFor}
                            onChange={(event) => this.setState({ searchFor: event.target.value.trim(), paginationStart: 1 })}
                            placeholder="Поиск авторов по имени" />
                    </ListItem>
                </ListItem>
                <ListItem itemType="HeaderDiv">
                    <ListItem itemType="HeaderTitleDiv" clicked={this.sortByNameHandler} >
                        Имя автора
                        <Arrow arrowType={this.state.sortByViews ? "" : this.state.reverse ? "UpArrow" : "DownArrow"} />
                    </ListItem>
                    <ListItem itemType="HeaderTitleDiv" clicked={this.sortByViewsHandler}>
                        Просмотры
                        <Arrow arrowType={this.state.sortByViews ? this.state.reverse ? "UpArrow" : "DownArrow" : ""} />
                    </ListItem>
                </ListItem>
                {list}
                <ListItem itemType="NavigationDiv">
                    <Arrow arrowType={this.state.paginationStart === 1 ? "" : "LeftArrow"}
                        clicked={this.decreasePaginationHandler} />
                    {this.state.paginationStart}-{Math.min(this.state.paginationStart + PAGINATION_STEP - 1, sortedData.length)}
                    <Arrow arrowType={this.state.paginationStart + PAGINATION_STEP - 1 >= sortedData.length ? "" : "RightArrow"}
                        clicked={this.increasePaginationHandler} />
                </ListItem>
            </React.Fragment >
        )
    }
}

export default AuthorsList;