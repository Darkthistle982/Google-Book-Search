import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <section>
          <SearchBar />
        </section>
      </div>
    );
  }
}

export default App;
