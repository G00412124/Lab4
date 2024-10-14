import { useEffect, useState } from "react";
import Movies from "./Movies"; // Import the Movies component
import axios from 'axios'; 
const Read = () => { // Functional component called Read
    const data = []; // Create an empty array called data
    const [movies, setMovies] = useState([]); // Create a state variable called movies

      useEffect( // This effect will run once when the component is first rendered
        () => { // The callback function to run

          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') // Make a GET request to the URL provided (this is a mock API)
          .then((response)=>{ // If the request is successful
            console.log(response.data.movies); // Log the data to the console
            setMovies(response.data.movies); // Update the movies state variable with the data
          })
          .catch((error)=>{
            console.log(error); // Log any errors to the console
          }); // If the request is unsuccessful, do nothing


      }, [] // The empty array means this effect will only run once when the component is first rendered
    ); // End of useEffect

        

      

    return ( // The JSX to return
        <div> 
            <h3>Hello from read component!</h3>    
            <Movies myMovies={data}/> 
        </div>
    );
}

export default Read; // Export the component