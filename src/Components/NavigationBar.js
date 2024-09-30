import { Navbar, Nav } from 'react-bootstrap'; //import the Navbar and Nav components from the react-bootstrap library
import { Link } from 'react-router-dom'; //import the Link component from the react-router-dom library

const NavigationBar = () => { //this is the NavigationBar component that returns the JSX code
  return (
    <Navbar bg="light" expand="lg"> {/*//this is the NavigationBar component*/}
      <Navbar.Brand href="/">React App</Navbar.Brand> {/*//this is the brand name of the NavigationBar*/}
      <Nav className="mr-auto"> {/*//this is the Nav component that contains the Nav.Link components*/}
        <Nav.Link as={Link} to="/home">Home</Nav.Link>  {/*//this is the route for the Content component*/}
        <Nav.Link as={Link} to="/read">Read</Nav.Link> {/*//this is the route for the Read component*/}
        <Nav.Link as={Link} to="/create">Create</Nav.Link> {/*//this is the route for the Create component*/}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar; //this exports the NavigationBar component so it can be imported in other files