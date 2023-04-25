import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { apiRequest } from "./PixabayAPI/PixabayAPI";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    totalHits: 0,
    loading: false,
  };

  updateQuery = query => {
    this.setState({ query });
  };
  
  render() {
    const { hits, loading, totalHits, page } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.updateQuery} />
        <ImageGallery images={hits} />
      </>
    );
  }
}