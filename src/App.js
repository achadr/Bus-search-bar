import React, { Component } from 'react';
import './App.css';
import background from './images/control.jpg'
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar'
import Content from './components/Content/Content'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
     <Grid container  style={{  width: "100%", height: "586px", backgroundImage: `url(${ background })` }} className='App'>
       <NavBar />
        <Content />
        <Footer />
     </Grid>
    );
  }
}

export default App;
