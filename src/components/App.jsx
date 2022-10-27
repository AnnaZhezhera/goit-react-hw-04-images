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
    totalHits: 0,
  };

  appOnSubmit = async searchQuery => {
    try {
      this.setState({ isLoading: true });
      const images = await API.getImages(searchQuery, this.state.page);

      if (images.hits.length === 0) {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }

      if (images.total)
        this.setState(state => ({
          searchImages: images.hits,
          searchQuery: searchQuery,
          totalHits: images.total,
        }));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = async () => {
    try {
      this.setState({ isLoading: true });
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

  isLoadMoreShown = () => {
    return (
      this.state.searchImages.length > 0 &&
      this.state.searchImages.length !== this.state.totalHits &&
      !this.state.isLoading
    );
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
          isShown={this.isLoadMoreShown()}
        />
        <Loader isLoading={this.state.isLoading} />
      </AppWrapp>
    );
  }
}
