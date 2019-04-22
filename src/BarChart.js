import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const { data, height, width } = this.props;

    // Create SVG and append to body
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      // shifts the position of each bar by (index *) 70
      .attr("x", (d, i) => i * 70)
      // fills from the top down, so need to subtract from height
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 65)
      // multiplied by 10 to increase height of each bar
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    // Append labels
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d - 3);
  }

  render() {
    return <div id={"#" + this.props.id} />;
  }
}

export default BarChart;
