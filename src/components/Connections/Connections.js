import React from 'react';
import ConnectionContainer from '../ConnectionContainer/ConnectionContainer.js'

import "./Connections.css";
const dummyData = require("../../dummydata.json");

class Connections extends React.Component {
  state = {
    connections: [],
  };

  componentDidMount() {
    this.setState({
      connections: dummyData,
    })
  }

  removeConnection = id => {
    const newConnections = this.state.connections.filter(connection => {
      return connection.id !== id;
    });
    this.setState({ connections: newConnections });
  };

  render() {
    return (
      <div className="Connections">
        {this.state.connections.map((connection, index) => {
          return (
            <div key={index}>
              <ConnectionContainer 
              connection={connection}
              id={index}
              removeConnection={this.removeConnection}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Connections;