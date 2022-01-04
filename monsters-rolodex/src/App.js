import React, { Component } from "react";

import CardList from "./Components/CardList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // async function getData() {
    //   const result = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const jsonResult = await result.json();
    //   console.log(jsonResult);
    //   this.setState({ monsters: jsonResult });
    // }
    // getData();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }));
  }

  render() {
    const monsters = this.state.monsters;
    return (
      <div>
        <CardList monsters={monsters} />
      </div>
    );
  }
}
