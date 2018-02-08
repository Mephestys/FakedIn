import React from "react";

import "./ConnectionContainer.css";

const ConnectionContainer = props => {
  const connection = props.connection;
  
  return (
    <div className="ConnectionContainer">
      <div className="ConnectionContainer AvatarContainer">
        <img className="ConnectionContainer Avatar" src={connection.avatar} alt="Avatar failed to load." />
      </div>
      <div className="ConnectionContainer ConnectionName">
        {connection.name}
      </div>
      <div className="ConnectionContainer ConnectionTitle">
        {connection.title}
      </div>
      <div className="ConnectionContainer ConnectButtonContainer">
        <button className="ConnectionContainer ConnectButton" type="submit">Connect</button>
      </div>
    </div>
  )
}

export default ConnectionContainer;