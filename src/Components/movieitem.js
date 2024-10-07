import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieItem = (props) => { //this is a functional component called MovieItem
  return (
    <Card sx={{ maxWidth: 345, margin: '16px auto' }}> {/*this is the Card component that contains the movie details*/}
      <CardMedia
        component="img" //this is the component of the Card
        height="500" //this is the height of the Card
        image={props.movie.Poster} //this is the Poster of the movie
        alt="Movie Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> {/*this is the title of the movie*/}
          {props.movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary"> {/*this is the year the movie was released*/}
          {props.movie.Year}
        </Typography> {/*this is the closing Typography component*/}
      </CardContent>
    </Card> //this is the closing Card component
  );
}

export default MovieItem; //this exports the MovieItem component so it can be imported in other files