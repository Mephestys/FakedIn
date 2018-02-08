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
            <Grid>
              <Row>
                <Col key={index}>
                  <ConnectionContainer connection={connection}/>
                </Col>
              </Row>
            </Grid>
          )
        })}
      </div>
    )
  }
}

export default Connections;