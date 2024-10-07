import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieItem = (props) => { //this is a functional component called MovieItem
  return (
    <Card sx={{ maxWidth: 345, margin: '16px auto' }}>
      <CardMedia
        component="img"
        height="500"
        image={props.movie.Poster}
        alt="Movie Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieItem; //this exports the MovieItem component so it can be imported in other files