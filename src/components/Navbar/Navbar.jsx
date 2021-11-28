import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/rose.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <div>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography variant="h6" className={classes.title} color="inherit">
                       <img src={logo} alt = "rose.js" height="25px" className={classes.image}></img>
                       Rose Apothecary
                   </Typography>
                   <div className={classes.grow} />
                   <div className={classes.button}>
                       <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                       </IconButton>
                   </div>
               </Toolbar>
               </AppBar> 
        </div>
    )
}

export default Navbar
