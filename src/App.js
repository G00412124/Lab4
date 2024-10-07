import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Components/content'; //import the Content component from the content.js file
import Header from './Components/Header'; //import the Header component from the Header.js file
import Footer from './Components/Footer'; //import the Footer component from the Footer.js file
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Read from './Components/Read'; //import the Read component from the Read.js file
import Create from './Components/Create'; //import the Create component from the Create.js file




function App() { //this is the App component that returns the JSX code 
  return ( //this is the return statement that returns the JSX code
    <Router>
      <NavigationBar />  {/*//this is the NavigationBar component ,*/}
      <Routes>
        <Route path="/home" element={<Content />} />   {/*//this is the route for the Content component*/}
        <Route path="/Read" element={<Read/>} /> {/*//this is the route for the Read component*/}
        <Route path="/Create" element={<Create/>} /> {/*//this is the route for the Create component*/}	
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; //this exports the App component so it can be imported in other files