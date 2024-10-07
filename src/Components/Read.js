import Movies from './Movies'; //this imports the Movies component from the Movies.js file

const Read = () => { //this is the Read component that returns the JSX code

    const data = [ //this is an array of objects that contains the movie details
        {
          "Title": "Avengers: Infinity War", //this is the title of the movie
          "Year": "2018", //this is the year the movie was released
          "imdbID": "tt4154756", //this is the imdbID of the movie
          "Type": "movie", //this is the type of the movie
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" //this is the poster of the movie
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ];
  return (
    <div>
      <h2>Read</h2> {/*//this is the title of the Read component*/}
      <Movies myMovies= {data}/> {/*//this is the Movies component that is passed the data array as a prop*/}
    </div>
  );


}



export default Read; //this exports the Read component so it can be imported in other files