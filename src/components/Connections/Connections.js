import React from 'react';
import dummyData from "../../dummydata.js";
import ConnectionContainer from '../ConnectionContainer/ConnectionContainer.js'

import "./Connections.css";

class Connections extends React.Component {
  state = {
    connections: [],
  };

  componentWillMount() {
    this.setState({
      connections: dummyData,
    })
  }

  render() {
    return (
      <div className="Connections">
        {this.state.connections.map((connection, index) => {
          return (
            <div key={index}>
              <ConnectionContainer connection={connection}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Connections;