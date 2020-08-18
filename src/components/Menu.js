import React from 'react'
import { Navbar , Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Switch , BrowserRouter as Router} from 'react-router-dom'
import Items from './Items'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

function Menu(){
    return (
        <Router>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">TEAMATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/items">ITEMS</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>
            <Nav.Link href="#link">Another Link</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
    {/* <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text> */}
        <Nav.Link href="/login">SIGN IN</Nav.Link>
        <Nav.Link href="/register">SIGN UP</Nav.Link>
  </Navbar.Collapse>

        </Navbar>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/items">
                <Items />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <SignUp />
            </Route>
        </Switch>
        </Router>
    )
}

export default Menu;


