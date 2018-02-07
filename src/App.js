import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import TopAds from "./components/TopAds/TopAds.js";
import YourConnections from "./components/YourConnections/YourConnections.js";
import Invitations from "./components/Invitations/Invitations.js";
import MayKnow from "./components/MayKnow/MayKnow.js";
import SideAds from "./components/SideAds/SideAds.js";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar />
        </div>
      </div>
    );
  }
}

export default App;
