import React, { Component } from 'react';
import '../components.css';
import Grid from '@material-ui/core/Grid';
import Filter from './Filter'
import Results from './Results'
class Content extends Component {
  render() {
    return (
        <Grid container>
            <Filter />
            <Results />
        </Grid>
    )}
}

export default Content;
