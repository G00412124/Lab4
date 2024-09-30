import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Components/content'; //import the Content component from the content.js file
import Header from './Components/Header'; //import the Header component from the Header.js file
import Footer from './Components/Footer'; //import the Footer component from the Footer.js file
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;