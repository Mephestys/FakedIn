import React from 'react';
import "./YourConnections.css"

class YourConnections extends React.Component {

  render() {
    return (
      <div className="YourConnections">
        <div className="YourConnections ConnectionsNumber">
          34
        </div>
        <div className="YourConnections YourConnectionsText">
          Your connections
        </div>
        <div className="YourConnections SeeAll">
          See all
        </div>
        <div className="YourConnections AvatarRow">
          Some pictures here
        </div>
        <div className="YourConnections YourConnectionsText">
          Add personal contacts
        </div>
        <form className="YourConnections EmailForm">
          <input className="YourConnections EmailForm EmailBar" placeholder="you@your-email.com"/>
        </form>
        <div className="YourConnections ContinueSection">
          <button className="YourConnections ContinueSection ContinueButton">
            Continue
          </button>
        </div>
        <div className="YourConnections MoreOptions">
          More options
        </div>
        <div className="YourConnections ImportInfo">
          We'll import your address book to suggest connections. Learn more
        </div>
      </div>
    )
  }
}

export default YourConnections;