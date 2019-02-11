import React, { Component } from 'react';
import './components.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import logo from '../images/Logo.svg'
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {

  render() {
    return (
        <AppBar position="static" className='NavBar'>
            <Grid container direction='row' justify='flex-start' alignItems='center' >
                 <img src={logo} alt='logo' className='Logo' />
                 <Typography gutterBottom variant="h5" component="h2">
                    Tictactrip
                </Typography> 
                
            </Grid>
        </AppBar>
    );
  }
}

export default NavBar;