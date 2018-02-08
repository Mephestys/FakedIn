import React from 'react';
import dummyData from "../../dummydata.js";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import ConnectionContainer from '../ConnectionContainer/ConnectionContainer.js'

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
      <div>
        {this.state.connections.map((connection, index) => {
          return (
            <div>
              <div>
                <div key={index}>
                  <ConnectionContainer connection={connection}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Connections;