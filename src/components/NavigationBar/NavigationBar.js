import React from 'react';

class NavigationBar extends React.Component {

  render() {
    return (
      <div>
          <i className="material-icons">thumb_up</i>
          <input type="text" placeholder="Search"></input>
          <i className="material-icons">home</i>
          <i className="material-icons">people</i>
          <i className="material-icons">business_center</i>
          <i className="material-icons">chat</i>
          <i className="material-icons">notifications</i>
          Avatar
          <i className="material-icons">apps</i>
      </div>
    )
  }
}

export default NavigationBar;