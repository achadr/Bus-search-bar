import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const styles = {
  card: {
    width: 250,
    backgroundColor: 'transparent',
    margin: '20px'
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes, result } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={result.imgUrl}
          title={`${result.from} -> ${result.to} à ${result.price}€`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {`${result.from} -> ${result.to}  à ${result.price}€`}
          </Typography> 
          <Typography component="p">
            { result.via.join(' ,') }
          </Typography>
          <Typography component="p">
          { `Départ: ${moment(result.departureDate).format('DD/MM/YYYY HH:mm')}` }
          </Typography>
          <Typography component="p">
          { `Arrivée: ${moment(result.arrivalDate).format('DD/MM/YYYY HH:mm')}` }
          </Typography>
          <Typography component="p">
          { `Siège restant: ${result.remainingSeats}` }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
