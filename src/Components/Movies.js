import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Movies = (props) => { //this is the Movies component that returns the JSX code
    
  return ( //this is the return statement that returns the JSX code
    <div>
      <h1>Movies</h1> {/*//this is the title of the Movies component*/}
      <Grid container spacing={4}>
        {props.myMovies.map((movie) => { //this is the map function that maps each movie in the myMovies array to a movie object
          return ( //this is the return statement that returns the JSX code
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  image={movie.Poster}
                  alt="Movie Poster"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
} //this is the closing Movies component

export default Movies; //this exports the Movies component so it can be imported in other files