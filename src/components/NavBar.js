import React, { Component } from 'react';
import './components.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

class NavBar extends Component {

  render() {
    return (
        <AppBar position="static" className='NavBar'>
            <Grid container direction='row'>
                <Grid item xs={8}>
                    Logo
                </Grid>
                <Grid item xs={4}>
                   Right Stuff
                </Grid>
            </Grid>
        </AppBar>
    );
  }
}

export default NavBar;