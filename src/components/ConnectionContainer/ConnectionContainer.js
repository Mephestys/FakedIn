import React from "react";

import "./ConnectionContainer.css";

const ConnectionContainer = props => {
  const connection = props.connection;
  console.log(connection);
  
  return (
    <div className="ConnectionContainer">
    <div className="ConnectionContainer RemoveButtonContainer">
      <button className="ConnectionContainer RemoveButtonContainer" 
      onClick={() => {props.removeConnection(connection.id);}}>x</button>
    </div> 
      <div className="ConnectionContainer AvatarContainer">
        <img className="ConnectionContainer Avatar" src={connection.avatar} alt="Avatar failed to load." />
      </div>
      <div className="ConnectionContainer ConnectionName">
        {connection.name}
      </div>
      <div className="ConnectionContainer ConnectionTitle">
        {connection.title}
      </div>
      <div className="ConnectionContainer ConnectionBusiness">
        <div className="ConnectionContainer ConnectionBusiness Icon">
          <i className="ConnectionContainer material-icons">business</i>
        </div>
        <div className="ConnectionContainer ConnectionBusiness Business">
          {connection.business}
        </div>
      </div>
      <div className="ConnectionContainer ConnectButtonContainer">
        <button className="ConnectionContainer ConnectButtonContainer ConnectButton" type="submit">Connect</button>
      </div>
    </div>
  )
}

export default ConnectionContainer;