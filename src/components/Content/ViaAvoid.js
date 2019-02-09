import React, { Component } from 'react';
import '../components.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from './Select';
import AutoComplete from './AutoComplete';
import axios from 'axios'
class ViaAvoid extends Component {
    constructor(props) {
        super(props)
        this.state= {
            enable: false,
            value: '',
            location: '',
            options: [
                {value:'',label:'Select...'},
                {value:'via',label:'Via'},
                {value:'avoid',label:'Avoid'},
            ],
            suggestions: [],

        }
        this.handleViaAvoidDisplay = this.handleViaAvoidDisplay.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleChangeLocation = this.handleChangeLocation.bind(this)
    }
    handleViaAvoidDisplay () {
        this.setState({
            enable: !this.state.enable
        })
    }
    handleChangeSelect (value) {
        this.setState({
            value,

        })
        this.props.handleChange({ value, location: this.state.location })
    }
    handleChangeLocation (location) {
        this.handleGetSuggestions(location)
        if(!this.state.suggestions.map((suggestion) => suggestion.label).join().includes(location)) {
            this.setState({
                errorTo: 'Please Choose a valid City'
            })
        }else {
            this.setState({
                errorTo: undefined
            })
        }
        this.setState({
            location,

        })
        this.props.handleChange({ value: this.state.value, location })
    }
    handleGetSuggestions = (value) => {
        axios.get(`http://www-uat.tictactrip.eu/api/cities/autocomplete/?q=${value}`)
        .then((response) => {
            let formattedSuggestions = response.data.map((suggestion) => ({label: suggestion.local_name}))
            this.setState({ suggestions: formattedSuggestions })
        })
      }
  render() {
    return (
       <Grid container direction='row'>
           <Grid item xs={12} > <Button color="primary" onClick={this.handleViaAvoidDisplay}>Via/Avoid</Button></Grid>
           <Grid item xs={6}>
           {this.state.enable && <Select value= {this.state.value} options={this.state.options} handleChange={this.handleChangeSelect} />}
           </Grid>
           <Grid item xs={6}>
            {this.state.enable &&
                <AutoComplete
                    suggestions ={this.state.suggestions}
                    value={ this.state.location }
                   placeholder='Enter Station'
                   handleChange={this.handleChangeLocation}
               />}   
           </Grid>
        </Grid>
    )}
}

export default ViaAvoid;
