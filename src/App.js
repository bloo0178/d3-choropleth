import React, { Component } from 'react';
import styles from "./App.module.css";
import BarChart from './BarChart';

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,

  }

  render() {
    const {data, height, width} = this.state;
    return (
      <div className={styles.App}>
      <BarChart data={data} height={height} width={width}/>
      </div>
    );
  }
}

export default App;
