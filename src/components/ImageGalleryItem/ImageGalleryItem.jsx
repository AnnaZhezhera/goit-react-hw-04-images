import React from 'react';
import { ImageGalleryList } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <ImageGalleryList className="gallery-item" key={id}>
      <img src={webformatURL} alt={tags} />
    </ImageGalleryList>
  );
};
