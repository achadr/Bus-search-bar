import React, { Component } from 'react';
import '../components.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AutoComplete from './AutoComplete'
import ViaAvoid from './ViaAvoid'
import Radio from '@material-ui/core/Radio';
import { DateTimePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';
import axios from 'axios'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state= {
            departureDate: null,
            returnDate: null,
            from: '',
            to: '',
            viaAvoid:{
                value: '',
                location:'',
            },
            travelType :'oneWay' ,
            suggestions: [],
            errorFrom: undefined,
            errorTo: undefined,

        }
        this.handleViaAvoidChange = this.handleViaAvoidChange.bind(this)
    }
    
  handleViaAvoidChange (viaAvoid) {
      this.setState({
          viaAvoid: viaAvoid
      })
  }
  handleChangeTravelType = event => {
    this.setState({ travelType: event.target.value });
  };
  handleDepartureDateChange = date => {
    this.setState({ departureDate: date });
  };
  handleReturnDateChange = date => {
    this.setState({ returnDate: date });
  };
  handleGetSuggestions = (value) => {
    axios.get(`http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${value}`)
    .then((response) => {
        console.log('value', value)
        let formattedSuggestions = response.data.map((suggestion) => ({label: suggestion.local_name}))
        this.setState({ suggestions: formattedSuggestions })
    })
  }
  handleChangeDestinations = (type) => (value) => {
      console.log('labels', this.state.suggestions.map((suggestion) => suggestion.label).join())
      if(type === 'from') {
        this.handleGetSuggestions(value)
        if(!this.state.suggestions.map((suggestion) => suggestion.label).join().includes(value)) {
            this.setState({
                errorFrom: 'Please Choose a valid City'
            })
        } else {
            this.setState({
                errorFrom: undefined
            })
        }
        this.setState({
            from: value,
        })
      }
      if(type === 'to') {
        this.handleGetSuggestions(value)
        if(!this.state.suggestions.map((suggestion) => suggestion.label).join().includes(value)) {
            this.setState({
                errorTo: 'Please Choose a valid City'
            })
        }else {
            this.setState({
                errorTo: undefined
            })
        }
        this.setState({
            to: value,
        })
      }
  
  }
  handleGetTimeAndTickets = () => {
     this.props.handleSearch(this.state)
  }
  isError () {
      return this.state.errorFrom || this.state.errorTo
  }
  render() {
    return (
    <Paper className='Filter'>
        <Grid container direction='column'>
            <Grid item xs={11}>
                <AutoComplete
                    suggestions ={this.state.suggestions}
                    value={ this.state.from }
                    placeholder='De'
                    handleChange={this.handleChangeDestinations('from')}
                />
            </Grid>
            <Grid item xs={11}>
                <AutoComplete
                    suggestions ={this.state.suggestions}
                    value={ this.state.to }
                    placeholder='A'
                    handleChange={this.handleChangeDestinations('to')}
                />
            </Grid>
            <Grid item xs={11}>
               <ViaAvoid handleChange={ this.handleViaAvoidChange } viaAvoid={this.state.viaAvoid} />
            </Grid>
            <Grid item xs={11}>
                <Grid container direction='row'>
                    <Grid item xs={4}>
                        <span style={{ fontSize: '12px' }}>Aller simple</span>
                        <Radio
                            checked={this.state.travelType === 'oneWay'}
                            onChange={this.handleChangeTravelType}
                            value="oneWay"
                            name="oneWay"
                            aria-label="oneWay"
                            />
                    </Grid>
                    <Grid  item xs={4}>
                        <span style={{ fontSize: '12px' }}>Retour</span>
                        <Radio
                        checked={this.state.travelType === 'return'}
                        onChange={this.handleChangeTravelType}
                        value="return"
                        name="return"
                        aria-label="return"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <span style={{ fontSize: '12px' }}>Retour ouvert</span>
                        <Radio
                        checked={this.state.travelType === 'openReturn'}
                        onChange={this.handleChangeTravelType}
                        value="openReturn"
                        name="openReturn"
                        aria-label="openReturn"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={11}>
                <DateTimePicker value={this.state.departureDate} onChange={this.handleDepartureDateChange} label='Date de départ' />
            </Grid>
            { this.state.travelType === 'return' &&
                <Grid item xs={11}>
                    <DateTimePicker value={this.state.returnDate} onChange={this.handleReturnDateChange} label='Date de retour' />
                </Grid>
            }
           { this.isError() && <Grid item xs={11}>
                    {this.isError()}
            </Grid>}
            <Grid item xs={12} className='SearchButton'>
                <Button  variant="contained" color="primary" onClick={this.handleGetTimeAndTickets}> Get times & tickets  </Button>
            </Grid>
        </Grid>
    </Paper>
    )}
}

export default Filter;
