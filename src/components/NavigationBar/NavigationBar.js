import React from 'react';

import "./NavigationBar.css";

class NavigationBar extends React.Component {

  render() {
    return (
      <div className="NavigationBar">
          <i className="NavigationBar material-icons">thumb_up</i>
          <form>
            <input className="NavigationBar Searchbar" type="text" placeholder="Search"></input>
          </form>
          <i className="NavigationBar material-icons">home</i>
          <i className="NavigationBar material-icons">people</i>
          <i className="NavigationBar material-icons">business_center</i>
          <i className="NavigationBar material-icons">chat</i>
          <i className="NavigationBar material-icons">notifications</i>
          <div className="NavigationBar Avatar">
            Avatar
          </div>
          <div className="NavigationBar Apps">
            <i className="NavigationBar material-icons">apps</i>
          </div>
      </div>
    )
  }
}

export default NavigationBar;