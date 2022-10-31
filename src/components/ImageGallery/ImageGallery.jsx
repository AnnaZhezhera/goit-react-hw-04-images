import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, ErrorMessage } from './ImageGallery.styled';
import Modal from '../Modal/Modal';

export default function ImageGallery({ searchImages, error }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setselectedImage] = useState({
    largeImageURL: null,
    tags: null,
  });

  const toggleModal = (showModal, selectedImage) => {
    setShowModal(showModal);
    setselectedImage(selectedImage);
  };

  return (
    <ImageGalleryList className="gallery">
      {showModal && (
        <Modal onClose={() => toggleModal(false, '')}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </Modal>
      )}
      {error === true ? (
        <ErrorMessage>Try another search word</ErrorMessage>
      ) : (
        searchImages.map(image => (
          <ImageGalleryItem
            key={image.id}
            {...image}
            onClick={() => toggleModal(true, image)}
          />
        ))
      )}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  searchImages: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.bool,
};
