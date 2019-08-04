import React, {Component} from 'react';
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import auth from '../auth';

 class NavBar extends Component {

  render() {
      
    return (
      <div>
        <Navbar className="navBar-bg"  light expand="md">
          <NavbarBrand className="navBar-text" href="/">PinterFake</NavbarBrand>
          <Collapse  navbar>
            {(auth.user !== null) ? 
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink  onClick={() => {this.props.history.push('/profile')}
        } >{auth.user.email}</NavLink>
              </NavItem>
              <NavItem>
                <Button color="warning" onClick={() => {auth.logout(()=> {this.props.history.push('/profile')})}
        } >Log Out</Button>
              </NavItem>
              </Nav> : 
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin">Sing In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
              </Nav>
              }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);