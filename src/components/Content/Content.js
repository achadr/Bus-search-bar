import React, { Component } from 'react';
import '../components.css';
import Grid from '@material-ui/core/Grid';
import Filter from './Filter'
import Results from './Results'
import data from '../../data/data.json'

class Content extends Component {
    state = {
        results: undefined,
    }
  handleSearch = (filter) => {
      console.log('filter', filter)
      console.log('data', data)
     let results = data.filter((ticket) => {
        let passCondition
        passCondition = (ticket.from.includes(filter.from) || filter.from.includes(ticket.from)) && ( ticket.to.includes(filter.to) || filter.to.includes(ticket.to))
        return passCondition
     })
      this.setState({
          results,
      })
  }
  render() {
    return (
        <Grid container direction='row' className='Content'>
            <Grid item xs={4}>
                <Filter handleSearch={this.handleSearch} />
            </Grid>
            <Grid item xs={8}>
                <Results results={this.state.results} />
            </Grid>
        </Grid>
    )}
}

export default Content;
