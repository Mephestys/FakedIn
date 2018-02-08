import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import TopAds from "./components/TopAds/TopAds.js";
import YourConnections from "./components/YourConnections/YourConnections.js";
import Invitations from "./components/Invitations/Invitations.js";
import Connections from "./components/Connections/Connections.js";
import SideAds from "./components/SideAds/SideAds.js";

import './App.css';

class App extends React.Component {
  state = {

  };

  render() {
    return (
      <div className="App">
        <div className="App NavigationBarSection">
          <NavigationBar />
        </div>
        <div className="App TopAdsSection">
          <TopAds />
        </div>
        <div className="App MainSection">
          <div className="App YourConnectionsSection">
            <YourConnections />
          </div>
          <div className="App ConnectionsSection">
            <Connections />
          </div>
          <div className="App SideAdsSection">
            <SideAds />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
