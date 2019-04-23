import React, { Component } from "react";
import styles from "./App.module.css";
import Map from './Map.jsx';

class App extends Component {


  render() {

    return (
      <div className={styles.App}>
        <Map />
      </div>
    );
  }
}

export default App;
