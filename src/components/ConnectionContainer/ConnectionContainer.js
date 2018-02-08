import React from "react";

const ConnectionContainer = props => {
  const connection = props.connection;
  
  return (
    <div>
      <div>
        <img src={connection.avatar} width="64" height="64" alt="Avatar failed to load." />
      </div>
      <div>
        {connection.name}
      </div>
      <div>
        {connection.title}
      </div>
      <div>
        <button type="submit">Connect</button>
      </div>
    </div>
  )
}

export default ConnectionContainer;