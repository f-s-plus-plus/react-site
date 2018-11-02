import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "font-awesome/css/font-awesome.min.css";

class NavbarCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return(
      <div>
      <Navbar className="navbar-custom">
        <NavbarToggler onClick={this.toggle} className="navbar-toggler"/>
        <NavbarBrand className="brand-custom">
          <i className="fas fa-user-tie padding-right"></i>
          Filip Saulean
        </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="navbar-custom-container">
              <NavItem className="nav-item">
                <NavLink href="#resume-container"  className="resume nav-link">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/f-s-plus-plus" className="github nav-link">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarCustom;
