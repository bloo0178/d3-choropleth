import React, { Component } from "react";
import draw from "./helper.js";
import axios from 'axios';
import './Map.css';

export default class Map2 extends Component {
  async componentDidMount() {
    const raw_education_data = await axios.get(
      "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json"
    );
    const education_data = raw_education_data.data;

    const raw_county_data = await axios.get(
      "https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json"
    );

    const county_data = raw_county_data.data;

    draw(education_data, county_data, this.props);
  }

  render() {
    return <div className="map" />;
  }
}
