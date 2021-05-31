import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar,Toolbar,Typography, Avatar, Button} from '@material-ui/core';
import memories from '../../images/logo.png';

import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    const user =null;
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div>
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="61" />
            </div>
            <Toolbar>
                {
                    user?.result ? (
                        <div className={classes.appBar}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={()=>{}}>Logout</Button>            
                        </div>
                    ):(
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )
                }
            
            </Toolbar>
           
        </AppBar>
    )
}

export default Navbar;