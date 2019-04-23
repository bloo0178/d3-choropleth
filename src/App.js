import React, { Component } from "react";
import styles from "./App.module.css";
import Map from './Map.jsx';

class App extends Component {


  render() {

    return (
      <React.Fragment>
      <h1>U.S. Educational Attainment</h1>
      <h3>Percentage of adults ages 25 and older with a bachelor's degree or higher (2010-2014)</h3>
      <div className={styles.App}>
        <Map />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
