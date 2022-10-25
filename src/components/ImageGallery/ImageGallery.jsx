import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, ErrorMessage } from './ImageGallery.styled';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  static = {
    searchImages: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.bool,
  };
  state = {
    showModal: false,
    largeImageURL: '',
  };

  toggleModal = (showModal, largeImageURL) => {
    this.setState(state => ({
      showModal: showModal,
      largeImageURL: largeImageURL,
    }));
  };

  // console.log('searchImages', searchImages);

  // if (!error) {
  render() {
    const { searchImages, error } = this.props;
    // console.log('searchImages', searchImages[0].largeImageURL);

    return (
      <ImageGalleryList className="gallery">
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false, '')}>
            <img src={this.state.largeImageURL} alt="selected-card" />
          </Modal>
        )}
        {error === true ? (
          <ErrorMessage>Try another search word</ErrorMessage>
        ) : (
          searchImages.map(image => (
            <ImageGalleryItem
              key={image.id}
              {...image}
              onClick={() => this.toggleModal(true, image.largeImageURL)}
            />
          ))
        )}
      </ImageGalleryList>
    );
  }
}
// return ;
