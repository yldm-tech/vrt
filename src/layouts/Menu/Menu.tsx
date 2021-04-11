import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Paper
} from '@material-ui/core';
import Home from '@/views/Home/Home';
import Task from '@/views/Task/Task';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});


export default class Menu extends Component {
    state = { value: 0 ,messages:[
        {primary:'xiaomo',secondary:'18',person:'https://image.xiaomo.info/logo/logo.png'},
        {primary:'xiaomo',secondary:'18',person:'https://image.xiaomo.info/logo/logo.png'},

    ]};

    render() {
        return (
            <div>
                <List>
                    { this.state.messages.map(({ primary, secondary, person }, index) => (
                        <ListItem button key={ index + person }>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={ person }/>
                            </ListItemAvatar>
                            <ListItemText primary={ primary } secondary={ secondary }/>
                        </ListItem>
                    )) }
                </List>
                    <BottomNavigation
                        value={ this.state.value }
                        onChange={ (event, newValue) => {
                            this.setState({ value: newValue });
                        } }
                        showLabels
                    >
                        <BottomNavigationAction label="Home" icon={ <RestoreIcon/> }/>
                        <BottomNavigationAction label="Task" icon={ <FavoriteIcon/> }/>
                    </BottomNavigation>
            </div>
    );
    }
    }
