import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { apiRequest } from './PixabayAPI/PixabayAPI';
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

  updatePage = async (prevState, page) => {
    this.setState({ loading: true });
    const query = this.state.query;
    const { hits } = await apiRequest(query, page);
    this.setState({ hits: [...prevState.hits, ...hits], page });
    this.setState({ loading: false });
  }
  
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