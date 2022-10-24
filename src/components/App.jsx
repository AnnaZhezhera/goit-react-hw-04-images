// import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from './services/api';
import { AppWrapp } from './App.styled';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const REACT_APP_API_KEY = '29521518-5bff3e3ab528698c58648398d';
// axios.defaults.params = {};
// axios.defaults.params['key'] = REACT_APP_API_KEY;

// axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;

// const URL = `?q=${this.state.searchQuery}&page=1&image_type=photo&orientation=horizontal&per_page=12`;
// const URL = '?q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12';

export class App extends Component {
  state = {
    searchImages: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
  };

  appOnSubmit = async searchQuery => {
    console.log('App on subnit:', searchQuery);
    const images = await API.getImages(searchQuery, this.state.page);
    console.log('images', images.hits);
    this.setState(state => ({
      searchImages: images.hits,
      searchQuery: searchQuery,
    }));
  };

  loadMore = async () => {
    const images = await API.getImages(
      this.state.searchQuery,
      this.state.page + 1
    );

    this.setState(prevState => ({
      searchImages: [...prevState.searchImages, ...images.hits],
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchImages !== this.state.searchImages
    ) {
      console.log('fetch');
    }
  }

  render() {
    return (
      <AppWrapp>
        <Searchbar onSubmit={this.appOnSubmit} />
        <ImageGallery searchImages={this.state.searchImages} />
        <ButtonLoadMore onClick={this.loadMore} page={this.state.page} />
      </AppWrapp>
    );
  }
}
