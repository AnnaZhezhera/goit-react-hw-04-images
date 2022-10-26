import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from './services/api';
import { AppWrapp } from './App.styled';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchImages: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: false,
  };

  appOnSubmit = async searchQuery => {
    this.setState({ isLoading: true });
    try {
      const images = await API.getImages(searchQuery, this.state.page);

      if (images.hits.length === 0) {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }

      this.setState(state => ({
        searchImages: images.hits,
        searchQuery: searchQuery,
      }));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = async () => {
    this.setState({ isLoading: true });
    try {
      const images = await API.getImages(
        this.state.searchQuery,
        this.state.page + 1
      );

      this.setState(prevState => ({
        searchImages: [...prevState.searchImages, ...images.hits],
        page: prevState.page + 1,
      }));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <AppWrapp>
        <Searchbar
          onSubmitt={this.appOnSubmit}
          searchQuery={this.state.searchQuery}
        />

        <ImageGallery
          searchImages={this.state.searchImages}
          error={this.state.error}
        />

        <ButtonLoadMore
          onClick={this.loadMore}
          page={this.state.page}
          searchImages={this.state.searchImages}
          isLoading={this.state.isLoading}
        />
        <Loader isLoading={this.state.isLoading} />
      </AppWrapp>
    );
  }
}
