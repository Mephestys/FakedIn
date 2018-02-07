import React from 'react';
import ConnectionContainer from '../ConnectionContainer/ConnectionContainer.js'

class Connections extends React.Component {
  state = {
    mayKnowCards: [],
  };

  componentWillMount() {
    this.setState({
      mayKnowCards: this.props.connections,
    });
  }

  render() {
    return (
      <div>
        {this.state}
      </div>
    )
  }
}

export default Connections;