import React, { Component } from "react";

import CardList from "./Components/CardList/CardList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredArray: [],
    };
  }

  onSearch() {
    let clearTimeoutId = null;
    return function debouncedSearch(e) {
      clearTimeout(clearTimeoutId);
      let monsters = this.state.monsters;
      clearTimeoutId = setTimeout(() => {
        const matchingMonsters = monsters.filter((monster) =>
          monster.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        console.log(matchingMonsters);
        this.setState({ filteredArray: matchingMonsters });
      }, 1000);
    };
  }

  debouncedSearch = this.onSearch();

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
    const { monsters, filteredArray } = this.state;
    return (
      <div>
        <input type="text" onChange={this.debouncedSearch.bind(this)}></input>
        <CardList
          monsters={filteredArray.length > 0 ? filteredArray : monsters}
        />
      </div>
    );
  }
}
