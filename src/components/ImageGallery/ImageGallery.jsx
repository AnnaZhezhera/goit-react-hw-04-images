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
    selectedImage: {},
  };

  toggleModal = (showModal, selectedImage) => {
    this.setState(state => ({
      showModal: showModal,
      selectedImage: selectedImage,
    }));
  };

  render() {
    const { searchImages, error } = this.props;

    return (
      <ImageGalleryList className="gallery">
        {this.state.showModal && (
          <Modal onClose={() => this.toggleModal(false, '')}>
            <img
              src={this.state.selectedImage.largeImageURL}
              alt={this.state.selectedImage.tags}
            />
          </Modal>
        )}
        {error === true ? (
          <ErrorMessage>Try another search word</ErrorMessage>
        ) : (
          searchImages.map(image => (
            <ImageGalleryItem
              key={image.id}
              {...image}
              onClick={() => this.toggleModal(true, image)}
            />
          ))
        )}
      </ImageGalleryList>
    );
  }
}
