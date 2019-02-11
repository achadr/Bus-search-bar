import React, { Component } from 'react';
import './components.css';
import Grid from '@material-ui/core/Grid';
import FooterCard from './FooterCard'
import sncf from '../images/sncf.png'
import tgvlyria from '../images/tgvlyria.png'
import nationalRail from '../images/nationalRail.png'
import thalys from '../images/thalys.svg'
class Footer extends Component {
  render() {
    return (
        <Grid container direction='row' justify='flex-end'>
             <Grid item xs={6}>
                <img src={sncf} alt='sncf' className='Logo' />
                <img src={tgvlyria} alt='tgvlyria' className='Logo' />
                <img src={nationalRail} alt='nationalRail' className='Logo' />
                <img src={thalys} alt='thalys' className='Logo' />
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='row' justify='space-around' alignItems='center'>
                    <FooterCard />
                    <FooterCard />
                    <FooterCard />
                    <FooterCard />
                </Grid>
            </Grid>
        </Grid>
    )}
}

export default Footer;