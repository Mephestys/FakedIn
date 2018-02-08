import React from "react";

import "./ConnectionContainer.css";

const ConnectionContainer = props => {
  const connection = props.connection;
  
  return (
    <div className="ConnectionContainer">
      <div>
        <img className="ConnectionContainer Avatar" src={connection.avatar} width="64" height="64" alt="Avatar failed to load." />
      </div>
      <div className="ConnectionContainer ConnectionName">
        {connection.name}
      </div>
      <div className="ConnectionContainer ConnectionTitle">
        {connection.title}
      </div>
      <div className="ConnectionContainer ConnectButton">
        <button type="submit">Connect</button>
      </div>
    </div>
  )
}

export default ConnectionContainer;