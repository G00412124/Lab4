import MovieItem from "./movieitem";

const Movies = (props)=>{ // Functional component called Movies
    return props.myMovies.map( // Map over the myMovies prop
        (movie)=>{ 
            return <MovieItem mymovie={movie} key={movie.imdbID} /> // Pass the movie object as a prop to the MovieItem component
        }
    );
}

export default Movies; // Export the component