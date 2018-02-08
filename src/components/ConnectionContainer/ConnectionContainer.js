import React from "react";
import { Panel } from "react-bootstrap";

const ConnectionContainer = props => {
  const connection = props.connection;
  
  return (
    <Panel>
      <div>
        <img src={connection.avatar} width="64" height="64" alt="Avatar failed to load." />
      </div>
      <div>
        {connection.name}
      </div>
      <div>
        {connection.title}
      </div>
    </Panel>
  )
}

export default ConnectionContainer;