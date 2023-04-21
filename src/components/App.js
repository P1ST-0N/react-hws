import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    query: '',
  };

  updateQuery = query => {
    this.setState({ query });
  };
  
  render() {
    // const

    return (
      <>
        <Searchbar onSubmit={this.updateQuery} />
      </>
    );
  }
}