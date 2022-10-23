// import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import * as API from './services/api';
import { AppWrapp } from './App.styled';

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
  };

  appOnSubmit = async search => {
    console.log('App on subnit:', search);
    const images = await API.getImages(search);
    console.log('images', images.hits);
    this.setState(state => ({ searchImages: images.hits }));
  };

  render() {
    return (
      <AppWrapp>
        <Searchbar onSubmit={this.appOnSubmit} />
        <ImageGallery searchImages={this.state.searchImages} />
      </AppWrapp>
    );
  }
}
