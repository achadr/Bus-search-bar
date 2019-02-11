import React, { Component } from 'react';
import '../components.css';
import Grid from '@material-ui/core/Grid';
import Result from './Result'
import Typography from '@material-ui/core/Typography';

class Results extends Component {
  render() {
    return (
        <Grid container justif='flex-end' className='Results'>
           {!this.props.results && <Grid item xs={12}>
                <Typography gutterBottom variant="h3" component="h2" style={ { color: 'white'} }>
                        Save an average of 51% when you book in advance*
                </Typography>
                <Typography gutterBottom variant="h4" component="h4" style={ { color: 'white'} }>
                    Get cheap train and bus tickets for travel across Europe
                </Typography>
            </Grid>}
            {this.props.results && this.props.results.length === 0 && <Grid item xs={12}>
                <span>
                   Sorry, no results for your search.
                </span>
            </Grid>}
            {this.props.results && this.props.results.length > 0 && <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
                { `${this.props.results.length} tragets trouvés` }
            </Typography> 
                <Grid container direction='row' justify='space-arround'>
                    { this.props.results.map((ticket, index) => (
                        <Result key={index} result={ticket} />
                            ))
                    }
                </Grid>
            </Grid>}
        </Grid>
    )}
}

export default Results;
