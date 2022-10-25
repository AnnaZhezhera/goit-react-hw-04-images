import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <ImageGalleryCard className="gallery-item" key={id}>
      <img src={webformatURL} alt={tags} onClick={onClick} />
    </ImageGalleryCard>
  );
};

ImageGalleryItem.prototype = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.array,
  onClick: PropTypes.func,
};
