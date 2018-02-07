import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar>
        <NavbarBrand>
          <i class="material-icons">thumb_up</i>
          <input type="text" placeholder="Search"></input>
          <i class="material-icons">home</i>
          <i class="material-icons">people</i>
          <i class="material-icons">business_center</i>
          <i class="material-icons">chat</i>
          <i class="material-icons">notifications</i>
          Avatar
          <i class="material-icons">apps</i>
        </NavbarBrand>
      </Navbar>
    )
  }
}

export default NavigationBar;