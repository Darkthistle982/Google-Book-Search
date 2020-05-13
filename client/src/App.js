import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SearchBar from "./Components/SearchBar/SearchBar";
import ResultCardContainer from "./Components/ResultCardContainer/ResultCardContainer";
import "./App.css";

class App extends Component {
  state = {
    booklist: [
      {
        title: "stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/N8bGxz7.png",
        link: "www.linkypoo.corn"
      },
      {
        title: "other stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/LVJhJrk.jpg"
      },
      {
        title: "more stuff",
        authors: ["people", "otherpeople"],
        description: "stuf stuf stuf",
        thumbnail: "https://i.imgur.com/rpgzGgh.jpg"
      },
    ],
  };



  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Jumbotron />
          <SearchBar />
          <ResultCardContainer booklist={this.state.booklist}/>
        </div>
      </div>
    );
  }
}

export default App;
