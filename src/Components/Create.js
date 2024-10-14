import { useState } from "react";

function Create() {
  const [title, setTitle] = useState(''); // Create a state variable called title
  const [year, setYear] = useState(''); // Create a state variable called year 
  const [poster, setPoster] = useState(''); // Create a state variable called poster

  const handleSubmit = (e) => { // Create a function called handleSubmit
    e.preventDefault(); // Prevent the default form action from taking place 
    const newMovie = { // Create a new movie object
      title, // Use the title state variable for the title
      year, // Use the year state variable for the year 
      poster // Use the poster state variable for the poster
    };
    console.log(newMovie); // Log the new movie object to the console
  }

  return ( // The JSX to return
    <div>
      <h2>This is my Create Component.</h2>     
      <form onSubmit={handleSubmit}>  
        <div className="form-group"> 
          <label>Add Movie Title: </label>     
          <input type="text" // Create an input field for the movie title
            className="form-control" // Add the Bootstrap class form-control
            value={title} // Set the value of the input field to the title state variable
            onChange={(e) => { setTitle(e.target.value) }} // When the input changes, update the title state variable
          />
        </div>
        <div className="form-group"> 
          <label>Add Movie Year: </label> 
          <input type="text" // Create an input field for the movie year
            className="form-control" // Add the Bootstrap class form-control
            value={year} // Set the value of the input field to the year state variable
            onChange={(e) => { setYear(e.target.value) }} // When the input changes, update the year state variable
          />
        </div>
        <div className="form-group"> 
          <label>Add Movie Poster: </label>  
          <input type="text" // Create an input field for the movie poster
            className="form-control" // Add the Bootstrap class form-control
            value={poster} // Set the value of the input field to the poster state variable
            onChange={(e) => { setPoster(e.target.value) }}  // Create an input field for the movie poster     
          />
        </div>
        <input type="submit" value="Add Movie" />  
      </form>
    </div>
  );
}

export default Create; // Export the component